// pages/api/refresh-session.ts
import { getIronSession } from "iron-session";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function refreshSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionOptions = {
    password: process.env.SESSION_SECRET as string,
    cookieName: "yourappname_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };
  const session: any = await getIronSession(req, res, sessionOptions);

  if (!session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { preferences } = req.body;

  if (!preferences) {
    return res.status(400).json({ message: "Preferences data is required" });
  }

  try {
    const db = getFirestore();
    const userRef = doc(db, "users", session.user.uid);

    // Update preferences in Firestore
    await updateDoc(userRef, { preferences });

    // Update preferences in session
    session.user.preferences = preferences;
    console.log(session.user);
    await session.save();

    res.status(200).json({ message: "Preferences updated" });
  } catch (error) {
    console.error("Error updating preferences:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
