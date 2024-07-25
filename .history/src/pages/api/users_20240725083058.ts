import connectMongoDB from '@/lib/monodb';
import User from '@/models/user';

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await connectMongoDB();
    const { name, email, password } = req.body;

    User.findOne({email}).then(user => {
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }
    }
    await User.create({name, email, password});
    return {
        body: {
            message: 'User created successfully',
            status: 201
        }
    }

  } else {
    // Handle any other HTTP method
  }
}