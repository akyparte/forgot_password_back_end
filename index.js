require('dotenv').config()
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const login_signup_route = require('./routes/login-singup-route');
const PORT = process.env.PORT || 4000;

http.createServer(app);
require('./db/database')

app.use(cors({origin:'*'}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/users',login_signup_route);


app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`);
})
