// pages/api/logout.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getIronSession } from "iron-session";

const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "yourappname_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default async function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getIronSession(req, res, sessionOptions);

  // Destroy the session
  session.destroy();

  // Redirect to login page
  res.writeHead(302, { Location: "/login" });
  res.end();
}
