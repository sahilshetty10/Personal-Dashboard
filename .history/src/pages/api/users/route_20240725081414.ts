import connectMongoDB from "@/lib/monodb";
import User from "@/models/user";


import { Request } from 'express';

export async function POST(req: Request){
    const {name, email, password} = await req.json();
    await connectMongoDB();
    await User.create({name, email, password});
    return {
        body: {
            message: 'User created successfully',
            status: 201
        }
    }

}