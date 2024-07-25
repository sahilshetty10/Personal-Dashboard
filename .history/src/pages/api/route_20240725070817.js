// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // set cookie as secure;
  res.setHeader("Set-Cookie", "name=John; Secure; HttpOnly");
  res.status(200).json({ name: "John Doe" });
}
