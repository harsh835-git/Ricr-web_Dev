import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); //connecting the mongoDB Database
        console.log(`MongoDB Connected at : ${conn.connection.host}:${conn.connection.port}`);

        console.log("DataBase name :", conn.connection.name);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectdb;