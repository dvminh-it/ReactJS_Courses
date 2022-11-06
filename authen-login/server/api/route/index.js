import { deleteStudent, updateStudent, searchStudent, getStudent, addStudent } from '../controller/index.js';
import { register, login } from '../controller/account.js';
import {verify, role}  from '../middleware/jwt.js';

const routes = (app) => {
    app.route('/student/:id')
        .delete(verify, role, deleteStudent)
        .put(verify, role, updateStudent);
    app.route('/student/search').get(
        verify,
        searchStudent,
    );
    app.route('/register')
        .post(register);
    app.route('/login')
        .post(login);
    app.route('/student')
        .get(verify, getStudent)
        .post(verify, role, addStudent);
};
export default routes;
