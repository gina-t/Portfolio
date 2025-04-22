import mongoose, { Document } from 'mongoose';
export interface CvDocument extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    filePath: string;
    fileType: 'pdf' | 'docx' | 'doc';
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare const CV: mongoose.Model<CvDocument, {}, {}, {}, mongoose.Document<unknown, {}, CvDocument> & CvDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default CV;
