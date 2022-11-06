import express from 'express';
import pkg from 'mongoose';
var { Promise, connect } = pkg;
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './api/route/index.js';

const app = express()
const port = process.env.PORT || 3001

Promise = global.Promise;
connect('mongodb://localhost:27017/quiz_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {
        //console.log('successful database connection');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors({}));
app.use(bodyParser.json());

routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);

