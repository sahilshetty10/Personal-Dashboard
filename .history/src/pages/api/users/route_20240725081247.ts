

export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; password: any; }> | { name: any; email: any; password: any; }; }){
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