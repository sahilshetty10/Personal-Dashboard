// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { auth, db, storage } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getIronSession } from "iron-session";

const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "yourappname_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default async function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session: any = await getIronSession(req, res, sessionOptions);

  if (req.method === "POST") {
    const { email, password, name, image } = req.body;

    try {
      // Create user with Firebase Auth
      console.log("Creating user with email and password", email, password);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Upload profile image to Firebase Storage
      const imageBuffer = Buffer.from(image, "base64"); // Assuming the image is sent as base64
      const imageRef = ref(storage, `profile_images/${user.uid}`);
      await uploadBytes(imageRef, imageBuffer);
      const imageUrl = await getDownloadURL(imageRef);

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        profileImage: imageUrl,
        preferences: {
          stock1: "bitcoin",
          stock2: "ethereum",
          stock3: "dogecoin",
          newsCategory: "business",
          newsCountry: "us",
          holidayCountry: "us",
        }, // Empty preferences by default
      });

      // Set session
      session.user = {
        uid: user.uid,
        email: user.email,
        name: name,
        profileImage: imageUrl,
        preferences: {
          stock1: "bitcoin",
          stock2: "ethereum",
          stock3: "dogecoin",
          newsCategory: "business",
          newsCountry: "us",
          holidayCountry: "us",
        },
      };
      await session.save();
      res.status(200).json({ message: "Signup successful" });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
