import connectMongoDB from "@/lib/monodb";
import User from "@/models/user";
import bodyParser from 'body-parser';

import { Request } from 'express';

export async function POST(req: Request){
    const {name, email, password} = bodyParser.json()(req);
    await connectMongoDB();
    await User.create({name, email, password});
    return {
        body: {
            message: 'User created successfully',
            status: 201
        }
    }

}