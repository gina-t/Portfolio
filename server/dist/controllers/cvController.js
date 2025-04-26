import path from 'node:path';
import { fileURLToPath } from 'url';
// Get directory name for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// @desc    Download CV for authenticated users
// @route   GET /api/cv/download
// @access  Private (only authenticated users)
export const downloadCV = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../static/files/gina-tsanaktsidis-cv.pdf');
        res.download(filePath, 'gina-tsanaktsidis-cv.pdf');
    }
    catch (error) {
        console.error('Error downloading CV:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
//# sourceMappingURL=cvController.js.map