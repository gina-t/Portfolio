import { Request, Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { AuthRequest } from '../middleware/authMiddleware.js';
import fs from 'fs';

// Get directory name for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// @desc    Download CV for authenticated users
// @route   GET /api/cv/download
// @access  Private (only authenticated users)
export const downloadCV = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const filePath = path.join(__dirname, '../../static/files/gina-tsanaktsidis-cv.pdf');
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('File not found at path:', filePath);
      res.status(404).json({ message: 'CV file not found' });
      return;
    }
    
    console.log('File found, sending download...');
    res.download(filePath, 'gina-tsanaktsidis-cv.pdf');
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
