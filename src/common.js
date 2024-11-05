import DiamSdk from "diamnet-sdk";
import { getEnvType } from "./utils/env.js";

const networkData = getEnvType();

export async function getXDRData(data) {
  console.log(data);
  const server = new DiamSdk.Aurora.Server(networkData.diamURL);
  const sourceAccount = await server.loadAccount(data.fromAddress);

  const transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
    fee: DiamSdk.BASE_FEE,
    networkPassphrase: networkData.DIAMNetKey,
  })
    .addOperation(
      DiamSdk.Operation.payment({
        destination: data.toAddress,
        asset: DiamSdk.Asset.native(),
        amount: data.amount,
      })
    )
    .setTimeout(0)
    .build();
  const convertedXdr = transaction.toXDR("base64");
  return convertedXdr;
}
export async function transferDiams(tranferData, DiamSdk) {
  const server = new DiamSdk.Aurora.Server(networkData.diamURL);
  const sourceKeyPair = DiamSdk.Keypair.fromSecret(tranferData.privateKey);

  const decodedXdr = DiamSdk.xdr.TransactionEnvelope.fromXDR(
    tranferData.xdr,
    "base64"
  );
  let transaction = new DiamSdk.Transaction(decodedXdr, networkData.DIAMNetKey);
  // const transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
  //   fee: DiamSdk.BASE_FEE,
  //   networkPassphrase: networkData.DIAMNetKey,
  // })
  //   .addOperation(
  //     DiamSdk.Operation.payment({
  //       destination: tranferData.toAddress,
  //       asset: DiamSdk.Asset.native(),
  //       amount: tranferData.transferAmount,
  //     })
  //   )
  //   .setTimeout(30)
  //   .build();
  transaction.sign(sourceKeyPair);

  try {
    let res = await server.submitTransaction(transaction);
    return {
      transactionStatus: "Transaction Successful!",
      transactionDetails: res,
      success: true,
    };
  } catch (error) {
    return {
      transactionStatus: "Transaction failed!",
      transactionDetails: error,
      success: false,
    };
  }
}
