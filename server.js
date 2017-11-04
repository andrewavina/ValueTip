const
    dotenv = require('dotenv').load(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/stock_app',
    PORT = process.env.PORT || 3001, //either the port the webhost (e.g. Heroku) assigns if deployed or if local run on port number
    usersRoutes = require('./routes/users.js')


