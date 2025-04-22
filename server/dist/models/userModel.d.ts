import mongoose from 'mongoose';
import { Document } from 'mongoose';
export interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    comparePassword(password: string): Promise<boolean>;
}
declare const User: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
