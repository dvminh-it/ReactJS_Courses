import jwt from 'jsonwebtoken'

import pkg from 'express-jwt';
const { expressjwt, ExpressJwtRequest } = pkg;

const verify = expressjwt({
    secret: 'secret',
    algorithms: ['HS256'],
    getToken: function fromHeaderOrQuerystring(req) {
        if (
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer'
        )
            return req.headers.authorization.split(' ')[1];
        else if (req.query && req.query.token)
            return req.query.token;
        return null;
    },
});

const role = (req, res, next) => {
    const role = req.auth.data.role;
    if (role != 'admin') {
        res.send({ message: 'Bạn không có quyền admin' });
    } else {
        return next();
    }
};
export  {
    role,
    verify
};
