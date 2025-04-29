// Environment configuration (keep these first)
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'url';

// Set up dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables based on NODE_ENV
const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

dotenv.config({ path: path.resolve(__dirname, '..', envFile) });
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);

// Core dependencies
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

// Application modules
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cvRoutes from './routes/cvRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3001;

// serve static files from the "static" directory
app.use('/static', express.static(path.join(__dirname, '../static')));

// Set up CORS
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        'https://portfolio-s69z.onrender.com',
        'http://localhost:5173',
      ];
      // Allow requests with no origin
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security headers (with proper types)
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  next();
});

// First: API specific routes
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);

// Second: API documentation route
app.get('/api', (_req: Request, res: Response) => {
  res.json({
    message: 'Portfolio API Documentation',
    routes: {
      auth: {
        register: { method: 'POST', path: '/api/auth/' },
        login: { method: 'POST', path: '/api/auth/login' },
        logout: { method: 'POST', path: '/api/auth/logout' },
        getCurrentUser: { method: 'GET', path: '/api/auth/me' },
      },
      cv: {
        download: { method: 'GET', path: '/api/cv/download' },
      },
    },
  });
});

// Third: Serve the client build in production
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, '../../client/dist');

  // Serve static files from the client build
  app.use(express.static(staticPath));

  // Use middleware instead for SPA fallback
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(staticPath, 'index.html'));
  });
} else {
  // Use middleware for dev mode too
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.send('API is running in development mode');
  });
}

// Error handling
app.use(errorHandler);

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
    const server = app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });

    // Graceful shutdown
    const shutdown = async () => {
      console.log('Shutting down server...');
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });

      // If server doesn't close in 10s, force shutdown
      setTimeout(() => {
        console.error('Could not close connections in time, forcing shutdown');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
