import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await connectMongoDB();
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