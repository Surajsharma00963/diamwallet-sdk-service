// server.js
import express from "express";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import DiamSdk from "diamnet-sdk";
import { getEnvType } from "./utils/env.js";
import { getXDRData, transferDiams } from "./common.js";
import { rateLimit } from "express-rate-limit";
import axios from "axios";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const networkData = getEnvType();

app.use(
  cors()
  //   {
  //   origin: (origin, callback) => {
  //     callback(null, origin); // Dynamically set origin based on request
  //   },
  //   credentials: true,
  //   methods: ["POST", "GET", "PUT", "OPTIONS"],
  //   allowedHeaders: [
  //     "Authorization",
  //     "X-PINGOTHER",
  //     "Origin",
  //     "X-Requested-With",
  //     "Content-Type",
  //     "Accept",
  //   ],
  //   maxAge: 3600, // Max age in seconds
  // }
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(express.json());

const sessions = new Map();

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Session Registration Endpoints
app.post("/register-session", (req, res) => {
  const sessionId = uuidv4();
  sessions.set(sessionId, {
    status: "pending",
    createdAt: new Date(),
    type: "wallet",
  });
  res.json({ sessionId });
});

app.post("/register-transaction", (req, res) => {
  const sessionId = uuidv4();
  sessions.set(sessionId, {
    status: "pending",
    createdAt: new Date(),
    type: "transaction",
  });
  res.json({ sessionId });
});

// Wallet Connection Endpoint
app.post("/wallet-connected", (req, res) => {
  const { sessionId, address } = req.body;

  if (!sessionId || !address) {
    return res.status(400).json({ error: "Missing sessionId or address" });
  }

  if (sessions.has(sessionId)) {
    sessions.set(sessionId, {
      status: true,
      address,
      connectedAt: new Date(),
    });

    wss.clients.forEach((client) => {
      if (
        client.sessionId === sessionId &&
        client.readyState === WebSocket.OPEN
      ) {
        client.send(JSON.stringify({ status: true, address }));
      }
    });

    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Session not found" });
  }
});

// Status Check Endpoints
app.get("/check-connection/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  const session = sessions.get(sessionId);
  if (session) {
    res.json(session);
  } else {
    res.status(404).json({ error: "Session not found" });
  }
});

app.get(
  "/transaction-status/:sessionId",
  asyncHandler(async (req, res) => {
    const { sessionId } = req.params;
    const session = sessions.get(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Transaction session not found" });
    }

    res.json({
      status: session.status,
      result: session.result,
      error: session.error,
    });
  })
);

// WebSocket Connection Handler
wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === "subscribe" && data.sessionId) {
        ws.sessionId = data.sessionId;
        const session = sessions.get(data.sessionId);

        if (!session) {
          throw new Error("Session not found");
        }

        if (!data.action || data.action === "connect") {
          console.log("Wallet connection subscription established");
        }

        if (data.action === "transaction") {
          console.log("Transaction session established");
        }
      }
    } catch (error) {
      console.error("WebSocket message error:", error);
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(
          JSON.stringify({
            status: "error",
            error: "Failed to process message",
          })
        );
      }
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

// Transaction Endpoint
app.post(
  "/sendTransaction",
  asyncHandler(async (req, res) => {
    try {
      const { sessionId } = req.body;
      const session = sessions.get(sessionId);

      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      // Process transaction
      const result = await transferDiams(req.body, DiamSdk);

      // Update session with result
      sessions.set(sessionId, {
        ...session,
        status: "completed",
        result,
      });

      // Notify WebSocket clients
      wss.clients.forEach((client) => {
        if (
          client.sessionId === sessionId &&
          client.readyState === WebSocket.OPEN
        ) {
          client.send(
            JSON.stringify({
              status: "completed",
              data: result,
            })
          );
        }
      });

      res.json(result);
    } catch (error) {
      const sessionId = req.body.sessionId;
      if (sessionId && sessions.has(sessionId)) {
        const session = sessions.get(sessionId);
        sessions.set(sessionId, {
          ...session,
          status: "failed",
          error: error.message,
        });

        wss.clients.forEach((client) => {
          if (
            client.sessionId === sessionId &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(
              JSON.stringify({
                status: "failed",
                error: error.message,
              })
            );
          }
        });
      }

      throw error;
    }
  })
);

app.post(
  "/getXdr",
  asyncHandler(async (req, res) => {
    try {
      let xdrData = await getXDRData(req.body);

      res.json({
        data: {
          xdr: xdrData,
          status: 200,
        },
      });
    } catch (error) {
      res.status(404).json({
        error: "Unable to generate xdr",
        status: 404,
      });
    }
  })
);
app.post(
  "/wallet-address-validation",
  asyncHandler(async (req, res) => {
    try {
      let data = await axios.get(
        networkData.diamURL + "accounts/" + req.body.address
      );
      if (data.status === 200) {
        return res.json({
          data: { status: 200, valid: true },
        });
      }
    } catch (error) {
      console.log(error.response.data);
      return res.json({
        data: {
          status: 400,
          detail: "The request you sent was invalid in some way.",
          reason:
            "Account ID must start with `G` and contain 56 alphanum characters",
          valid: false,
        },
      });
    }

    // .then(response => {
    //   // Address is valid, proceed to transfer screen
    //   // navigation.navigate('TransferAmount', {
    //   //   asset: route.params.asset,
    //   //   privateKey: route.params.privateKey,
    //   //   publickey: userPublicKey,
    //   //   assets: route.params.assets,
    //   //   recent: '',
    //   //   network: network,
    //   //   address: address, // Pass the cleaned address
    //   // });
    // })
    // .catch(error => {
    //   displayError('Enter a valid receiver address');
    // });
    // try {
    //   let xdrData = await getXDRData(req.body);
    //   res.json({
    //     data: {
    //       xdr: xdrData,
    //       status: 200,
    //     },
    //   });
    // } catch (error) {
    //   res.status(404).json({
    //     error: "Unable to generate xdr",
    //     status: 404,
    //   });
    // }
  })
);

// Balance Check Endpoint
app.get(
  "/getWalletBalance/:address",
  asyncHandler(async (req, res) => {
    const { address } = req.params;
    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const server = new DiamSdk.Aurora.Server(networkData.diamURL);
    try {
      const account = await server.accounts().accountId(address).call();
      const finalBal = account.balances[account.balances.length - 1].balance;
      res.json({
        data: { address, balance: finalBal },
        status: 200,
      });
    } catch (error) {
      res.status(404).json({
        error: "Unable to fetch wallet balance",
        status: 404,
      });
    }
  })
);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Session Cleanup
setInterval(() => {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  for (const [sessionId, session] of sessions.entries()) {
    if (session.createdAt < oneHourAgo) {
      sessions.delete(sessionId);
    }
  }
}, 60 * 60 * 1000);

// Graceful Shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    process.exit(0);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
