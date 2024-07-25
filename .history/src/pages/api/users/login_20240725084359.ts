import connectMongoDB from '@/lib/monodb';
import User from '@/models/user';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    await connectMongoDB();
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    } else {
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      } else {   
       
        return res.status(200).json({ message: 'User logged in successfully',data:{
            name:user.name,
            email:user.email,
            token:user.id
        } });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  
  }
}