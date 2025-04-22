import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware.js';
export declare const downloadCV: (req: AuthRequest, res: Response) => Promise<void>;
