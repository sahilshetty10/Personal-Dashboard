import connectMongoDB from "@/lib/monodb";
import User from "@/models/user";


export async function POST(req){
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