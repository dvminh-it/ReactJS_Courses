import mongoose  from 'mongoose';

const accountModel = new mongoose.Schema({
    userName: String,
    password: String,
    role: {
        type: 'string',
        enum: ['admin', 'user'],
        default: 'user',
    },
});

export default mongoose.model('account', accountModel);
