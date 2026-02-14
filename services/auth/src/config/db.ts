import mongoose from "mongoose";

const connectDB = async() => {
    try{
        console.log(process.env.TEST_VAR as string)
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "PotatoDB",
        });

        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
};

export default connectDB;