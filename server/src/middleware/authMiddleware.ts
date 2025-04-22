import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Request type to include userId
export interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'No token, authorization denied' });
      return;
    }

    // Extract token
    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    // Add user id to request
    req.userId = decoded.id;
    req.userRole = decoded.role;

    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message || 'Token is not valid' });
  }
};
// To make a route protected, you need to create a middleware function that verifies the JWT token inclcuded in the request header. If the token is valid, the middleware allows the request to proceed. If the token is invalid, the middleware returns an error response. Middleware is a function that runs during the request-response cycle.
