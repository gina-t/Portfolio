import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI is not defined');
        }
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn.connection;
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map