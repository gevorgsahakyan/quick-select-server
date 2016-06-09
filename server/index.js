// Main starting point of the application
// As we can't use 'import' in node yet, we are using require() function. In frontend we will 'babelify' it,
// so there is will be not a problem. I don't think it's super necessary here, so I'll left like this.

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

// DB Setup
mongoose.connect(config.db);

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);