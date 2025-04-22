import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cvRoutes from './routes/cvRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);
// Default route
app.get('/', (req, res) => {
    res.send('Portfolio API is running');
});
// Error handling
app.use(errorHandler);
// Connect to MongoDB
const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map