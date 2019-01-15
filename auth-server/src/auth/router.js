'use strict';
const express = require('express'); //x

const User = require('./users-model.js'); //x
const authRouter = express.Router(); //x

const auth = require('./middleware.js');  //x

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();//check video at 12:27
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
      // let token = user.generateToken();
      res.status(200).send(req.token);
    }).catch(next);//if error do this (go to error)
});

authRouter.post('/signin', auth, (req, res) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
