import mongoose, { Document } from 'mongoose';

// Rename to CvDocument and make sure all fields match the schema
export interface CvDocument extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  filePath: string;
  fileType: 'pdf' | 'docx' | 'doc';
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const { Schema } = mongoose;

const cvSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
      default: 'My CV',
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      enum: ['pdf', 'docx', 'doc'],
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// One user can have one CV
cvSchema.index({ user: 1 }, { unique: true });

const CV = mongoose.model<CvDocument>('CV', cvSchema);

export default CV;
