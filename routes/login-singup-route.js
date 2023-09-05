const express = require('express');
const Queries = require('../db/db-functions');
const jwt = require('jsonwebtoken')
const queries = new Queries();
const login_signup_route = express.Router();


login_signup_route.post('/signup', async (req, res) => {
   try {
      let username = req.body.username;
      let passowrd = req.body.password;
      let email = req.body.email;

      if (username && passowrd && email) {
         let result = await queries.createUser(username, passowrd, email);
         res.json(result);
      } else {
         res.sendStatus(400)
      }
   } catch (error) {
      res.sendStatus(501)

   }
})

login_signup_route.post('/login', async (req, res) => {
   try {
      let username = req.body.username;
      let passowrd = req.body.password;

      if (username && passowrd) {
         let result = await queries.validateAndLogin(username, passowrd);
         if(result.validUser){
            const token = jwt.sign({username}, process.env.JWT_SECRET_KEY);
            result.token = token;
         }
         res.json(result);
      } else {
         res.sendStatus(400)
      }
   } catch (error) {
      res.sendStatus(501)
   }
})

login_signup_route.post('/send-otp', async (req, res) => {
   try {
      let email = req.body.email;

      if (email) {
         let result = await queries.sendOtp(email);
         res.json(result);
      } else {
         res.sendStatus(400)
      }
   } catch (error) {
      res.sendStatus(501)
   }
})

login_signup_route.post('/validate-otp', async (req, res) => {
   try {
      let email = req.body.email;
      let otp = req.body.otp;

      if (email && otp) {
         let result = await queries.validateOtp(email,otp);
         res.json(result);
      } else {
         res.sendStatus(400)
      }
   } catch (error) {
      res.sendStatus(501)
   }
})

login_signup_route.post('/change-password', async (req, res) => {
   try {
      let email = req.body.email;
      let password = req.body.password;

      if (email && password) {
         let result = await queries.changePassword(email,password);
         res.json(result);
      } else {
         res.sendStatus(400)
      }
   } catch (error) {
      res.sendStatus(501)
   }
})
module.exports = login_signup_route;
