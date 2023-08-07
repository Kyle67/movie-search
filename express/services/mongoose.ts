import { mongoose } from "@typegoose/typegoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
  try {
    console.log(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`
    );
    const dbConnection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`
    );

    console.log("MongoDB connected");
    return dbConnection;
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    throw error;
  }
};

module.exports = connectDB;
