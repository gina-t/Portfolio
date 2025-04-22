import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
// Get directory name for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// @desc    Download CV for authenticated users
// @route   GET /api/cv/download
// @access  Private (only authenticated users)
export const downloadCV = async (req, res) => {
    try {
        // Define the path to your CV file
        const cvPath = path.join(__dirname, '../../assets/resume.pdf');
        // Check if file exists
        if (!fs.existsSync(cvPath)) {
            res.status(404).json({ message: 'CV file not found' });
            return;
        }
        // Get filename from path
        const filename = path.basename(cvPath);
        // Set headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        // Send file
        res.sendFile(cvPath);
    }
    catch (error) {
        console.error('Error downloading CV:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
//# sourceMappingURL=cvController.js.map