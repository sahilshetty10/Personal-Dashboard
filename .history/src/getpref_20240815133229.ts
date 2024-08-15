// 'use server'
// import { cookies } from 'next/headers'
// import { getTokens } from "next-firebase-auth-edge";

// import { notFound } from "next/navigation";
// import { clientConfig, serverConfig } from "../src/config";

// export async function getFirebaseTokens() {
//   const tokens = await getTokens(cookies(), {
//     apiKey: clientConfig.apiKey,
//     cookieName: serverConfig.cookieName,
//     cookieSignatureKeys: serverConfig.cookieSignatureKeys,
//     serviceAccount: serverConfig.serviceAccount,
//   });

//   if (!tokens) {
//     notFound();
//   }

//   return tokens;
// }
 