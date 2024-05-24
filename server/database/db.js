import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://satvik2005:jpsd2005@ac-4qsms0j-shard-00-00.qi6cogd.mongodb.net:27017,ac-4qsms0j-shard-00-01.qi6cogd.mongodb.net:27017,ac-4qsms0j-shard-00-02.qi6cogd.mongodb.net:27017/?ssl=true&replicaSet=atlas-86zffp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone";
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to Database", error.message);
  }
};

export default Connection;
