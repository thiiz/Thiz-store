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
    },
    createdAt: {
        type: Date,
        expires: '1h',
        default: Date.now
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.recoverAccount || mongoose.model('recoverAccount', recoverAccount)
export default Dataset