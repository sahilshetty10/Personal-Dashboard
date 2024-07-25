import connectMongoDB from '@/lib/monodb';
import User from '@/models/user';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  
  if (req.method === 'POST') {
    await connectMongoDB();
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    } else {
      await User.create({ name, email, password });
      return res.status(201).json({ message: 'User created successfully' });
    }
  } else {
    // Handle any other HTTP method
  }
}