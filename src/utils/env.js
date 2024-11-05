// src/utils/env.js
import { Mainnet } from "../commonData/Production.js"; // Note the .js extension
import { Sandbox } from "../commonData/Sandbox.js"; // Note the .js extension

const mode = process.env.NODE_ENV || "DEV";

const getEnvType = () => {
  if (mode === "DEV") {
    return Sandbox;
  } else if (mode === "PROD") {
    return Mainnet;
  }
  return Sandbox; // Default fallback
};

export { getEnvType };
