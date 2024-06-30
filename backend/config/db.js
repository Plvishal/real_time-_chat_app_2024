import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
export const conn = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log('Connect with mongodb');
};

export default conn;
