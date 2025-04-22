import mongoose from 'mongoose';
const { Schema } = mongoose;
const cvSchema = new Schema({
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
}, {
    timestamps: true,
});
// One user can have one CV
cvSchema.index({ user: 1 }, { unique: true });
const CV = mongoose.model('CV', cvSchema);
export default CV;
//# sourceMappingURL=cvModel.js.map