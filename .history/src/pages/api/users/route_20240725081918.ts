import connectMongoDB from '@/lib/monodb';
import User from '@/models/user';

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await connectMongoDB();
    const name = 'John'; // Replace with the actual name value
    const email = 'john@example.com'; // Replace with the actual email value
    const password = 'password123'; // Replace with the actual password value
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