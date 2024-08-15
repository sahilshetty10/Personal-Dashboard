export const serverConfig = {
    cookieName: process.env.AUTH_COOKIE_NAME!,
    cookieSignatureKeys: [process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!, process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!],
    cookieSerializeOptions: {
        path: "/",
        httpOnly: true,
        secure: process.env.USE_SECURE_COOKIES === "true",
        sameSite: "lax" as const,
        maxAge: 12 * 60 * 60 * 24,
    },
    serviceAccount: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
        privateKey: firebase_private_key?.replace(/\\n/g, "\n")!,
    }
};

export const clientConfig = {
    apiKey: "AIzaSyAnh9YMaaFBmiTy8tlmSVmDRGBPPEafgpM",
    authDomain: "dashboard-c5d62.firebaseapp.com",
    projectId: "dashboard-c5d62",
    storageBucket: "dashboard-c5d62.appspot.com",
    messagingSenderId: "1051915442135",
    appId: "1:1051915442135:web:6862c0d8552bfadef45d92",
    measurementId: "G-BFBRHGZXQ8"
};
