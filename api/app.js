const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Other config
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use(require('./routes/auth.app'));
app.use('/app', require('./routes/app.route'));


module.exports = app;