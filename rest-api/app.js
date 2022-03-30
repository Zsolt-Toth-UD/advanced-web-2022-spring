var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const host = 'localhost';
const port = 27017;
const db = 'test';
const user = 'mern';
const password = 'secret';
mongoose.connect(`mongodb://${host}:${port}/${db}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            authSource: 'admin'
        },
        user: user,
        pass: password
    }).then(()=>{
        console.log('Mongo DB Connection Success!');
    })
    .catch(error => {
        console.log(`Mongo DB Connection Failure: Cause: ${error.message}\nStack: ${error.stack}`);
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MERN Template Express API with Swagger',
            version: '0.1.0',
            description:
                'Lorem ipsum ...',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html'
            },
            contact: {
                name: 'Zsolt Toth',
                url: 'https://github.com/ZsoltToth',
                email: 'toth.zsolt@uni-eszterhazy.hu'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000/'
            }
        ]
    },
    apis: [path.join(__dirname, '/routes/*.js')]
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/cars', carsRouter);

module.exports = app;
