import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDb;
