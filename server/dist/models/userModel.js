import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {
    timestamps: true,
});
// The correct approach is to let the user model handle password hashing exclusively
// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
    try {
        if (this.isNew || this.isModified('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
// Method to compare the provided password with the hashed password
userSchema.methods.comparePassword = async function (userPassword) {
    return bcrypt.compare(userPassword, this.password);
};
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=userModel.js.map