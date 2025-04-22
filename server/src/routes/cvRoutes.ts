import express from 'express';
import { downloadCV } from '../controllers/cvController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Only authenticated users can download the CV
router.get('/download', authMiddleware, downloadCV);

export default router;