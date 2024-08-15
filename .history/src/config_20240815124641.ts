const firebase_private_key= "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDET2QsbAw9DDXr\nf063qPCMzeekLkABcUMIThTENzakriZPbvsPwOk5I9CQgsGwGQcPDm5dyiVBiBwJ\nFse8vNbwJdfTG3A6PoYqAuwdSCZ4wPdiiGhCVlV/4uh/xMs+TPVf3ncchN4KZEmj\nXgUg++XgNj27GxmBKPiddw3dqf/KrwQyLNYy/hwZWJVGXTDr9Q10esW+s9gXKsQp\nv/yPMn9GHBJf/Z63JrI5H9zWeiYPDV8N6SbYK5CSd7u7GumTs+pFjYrET/8PVBrS\nJP79ERH/2PBMYX88fbOx1u0duNbP0U3krfkVjnXZzLphC3cB6shZDUNUTqx8Sc2E\nPdnUQGSlAgMBAAECggEABtRcP89ifZ03IwJC0tDlzYA8VtHlGCfAlUFiJ5FkLUaB\nvrG1uk6TzpEYaG6kHmRAgp2V6V1m/mil0Qsh18caEzC92XJS7TPPpxaC8GHaNMlB\n0gO83NH0F4blX8yQ5ZH312X97tgQgXwLs8tJkmQxEyPP8fp3YK70N0Y1DUkkxQBS\nH/drSNIpouX8OUb6wdj1iu6fUAfEnpihM/htbGIQ/9Dep1pJ5TYkA5kePsh6h7zD\nMFHG/h8v++QV0ntJpGyZozFiFKAR5lz+SiExpNpeHAqDtRl+y4mXheH/ruSM4mJh\nqU5PT7C8q87eBjbg6nOnV1dQAjMy2iVePCmvYll44QKBgQDqV+swW4t9QWT7fBiM\n8CJGcoCtMWne1oOoGullpXjK4gRAN3M1B1vasXrjD5JM047nWiBJORCZ6m7Pm/LK\nrUNvlmnjVOz90MmrFvMDPG+EGVn7tUAY49GYkjxTtZ/UMVZ0XLkrdD+oFldPHyzE\nIWRrIyHIoXVu0hFwEoV+wKI6+wKBgQDWc67eZ3QkHSiyICPZyRq0mxv6Ka/Z/2PD\ng21WmPDKosKo0Ggjrf3ngMfM4DMnWwMUUx1gxtUc73AHOuCyPqovQTbSxkZtNa69\n+iFkKxJmjmXVMfFbAJnMIwapeZZXLHwxJScJI4xLAfBF29FSnYqnbcMhmjxg/qFq\nvvptfJ3M3wKBgQCBXBD++7nPZdbpoAIpYrF48+ImON25Xe8FT/3A14wLaqJwFGvr\nPOmumkQ8rS7UbAA5o52o7fBFFo0e23Y1/Vj5cy12iT3dinCYmi2Bfs4MPLZYZSBB\n3RipQSg+CUd2KdoQl9K7swskrVh627mpdslo/ta6Wq5pg1qO5Bp+8rVbGwKBgQCC\nA+7P7d7PClKi87NolXE4cBWdLGrt+tVMMsE2UFEkOVtVJ80LXLBkC4KW5pJ82MPc\nLavRAZsxCMVdzMdvqWhab+pCDW2jRnmjuiNGbIqiXNDGWZofdxTHW7DtTMbmIRVG\nYmTxOHkU/J7ka6nTsanfaj90fuL+V0Ibyp9fg77T9wKBgGOBc0C4E2M373uCEbkd\nIw3PctgMIQn79btb0SZo+2ndNTaNWz5Pl22ObIn0aP7akGVYMEeprvRXVd14yRR5\nhAmMbqeSLGjwGIgHifcUsRgg2v1FRduB6eIa/9hmd7eLFvMKUw0m00w0l18eenji\nPkPeLkqA/np4+JMWFYoWwMQA\n-----END PRIVATE KEY-----\n",

export const serverConfig = {
    cookieName:"zeus-session",
    cookieSignatureKeys: [ , process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!],
    cookieSerializeOptions: {
        path: "/",
        httpOnly: true,
        secure: process.env.USE_SECURE_COOKIES === "true",
        sameSite: "lax" as const,
        maxAge: 12 * 60 * 60 * 24,
    },
    serviceAccount: {
        projectId: "dashboard-c5d62",
        clientEmail: "firebase-adminsdk-w6rz7@dashboard-c5d62.iam.gserviceaccount.com",
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
