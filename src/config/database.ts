import mongoose from "mongoose";

const connectMongoDb = () => {
	return mongoose.connect(process.env.LOCAL_DB_URL!);
};

export default connectMongoDb;
