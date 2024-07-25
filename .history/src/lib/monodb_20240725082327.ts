import moongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    if (process.env.MONGODB_URL) {
      await moongoose.connect(process.env.MONGODB_URL, {);
      console.log('MongoDB connected');
    } else {
      console.log('MONGODB_URL is not defined');
    }
  } catch (error) {
    console.log('Error connecting to MongoDB', error);
  }
}

export default connectMongoDB;