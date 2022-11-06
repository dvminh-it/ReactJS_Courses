import mongoose  from 'mongoose';
const studentModel = new mongoose.Schema({
    name: {
        type: String, default: 'email',
    },
    age: {
        type: Number, default: 20
    },
});

export default  mongoose.model('student', studentModel);
