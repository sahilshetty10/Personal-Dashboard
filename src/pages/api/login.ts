// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { auth, db } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { getIronSession } from "iron-session";

const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "yourappname_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  const session:any = await getIronSession(req, res, sessionOptions);

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        return res.status(404).json({ message: "User not found" });
      }
      const userData = userDoc.data();

      // Set session
      session.user = {
        uid: user.uid,
        email: user.email,
        name: userData?.name,
        preferences: userData?.preferences || {},
      };
      await session.save();

      res.status(200).json({ message: "Login successful" });
    } catch (error:any) {
      res.status(401).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
