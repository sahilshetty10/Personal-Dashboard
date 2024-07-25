import connectMongoDB from '@/lib/monodb';
import User from '@/models/user';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    await connectMongoDB();
    const { email, password } = req.body;

    let user = await User.findOne({ email });
  
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  
  }
}