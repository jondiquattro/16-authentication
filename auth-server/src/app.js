'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );
const authRouter = require( './auth/router.js' );
const bookRouter = require('./routes/books')
// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));//google analyticsnode 

app.use(express.json());
app.use(express.urlencoded({extended:true}));  //what forms come through


//routes

app.use(authRouter);
app.use(bookRouter);


// Catchalls
app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {

    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;                //1159 a little different
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
