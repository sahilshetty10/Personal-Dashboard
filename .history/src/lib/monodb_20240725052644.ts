import moongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await moongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
  }
}

export default connectMongoDB;