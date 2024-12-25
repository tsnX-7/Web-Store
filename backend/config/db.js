import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connect.host}`);
    }
    catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //status code 1 means error, 0 means success
    }
}

// export {connectDB};