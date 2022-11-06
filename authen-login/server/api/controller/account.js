import accountModel from '../model/account.js';
import { hash, compare } from 'bcrypt';
import pkg from 'jsonwebtoken';
const { sign } = pkg;

const register = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const check = await accountModel.findOne({ userName });
        if (check) {
            res.send({ messageFailure: 'tài khoản đã tồn tại' });
        } else {
            const encryptPassword = await hash(password, 10);
            const registerAcc = await accountModel.create({
                userName: userName,
                password: encryptPassword,
            });
            res.send({ registerAcc, messageSuccess: 'tạo tài khoản thành công' });
        }
    } catch (error) {
        console.log(error);
        res.send({ message: error });
    }
};
const login = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const check = await accountModel.findOne({ userName });
        if (check) {
            const checkPassword = await compare(
                password,
                check.password,
            );
            if (checkPassword) {
                const data = await accountModel.findById(check._id)
                    .select('-password'); // lấy tất cả cột trừ password
                const role = data.role;
                const token = sign({ data }, 'secret', {
                    expiresIn: '15m',
                });
                res.send({ token, role, message: 'dang nhap thanh cong' });
            } else {
                res.send({ passwordErrMess: 'sai mật khẩu' });
            }
        } else {
            res.send({ userNameErrMess: 'Tên đăng nhập không tồn tại' });
        }
    } catch (error) {
        res.send({ message: 'lỗi rồi' });
    }
};

export  { register, login };