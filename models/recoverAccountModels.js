import mongoose from 'mongoose'
const recoverAccount = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
recoverAccount.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
let Dataset = mongoose.models.recoverAccount || mongoose.model('recoverAccount', recoverAccount)
export default Dataset