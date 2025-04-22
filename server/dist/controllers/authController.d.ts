import { Request, Response } from "express";
import { AuthRequest } from '../middleware/authMiddleware.js';
export declare const registerUser: (req: Request, res: Response) => Promise<void>;
export declare const loginUser: (req: Request, res: Response) => Promise<void>;
export declare const logoutUser: (_req: Request, res: Response) => Promise<void>;
export declare const getCurrentUser: (req: AuthRequest, res: Response) => Promise<void>;
