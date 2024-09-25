const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {secret: "mysecretstring",
     resave:false,
     saveUninitialized:true};

     app.use(session(sessionOptions));
     app.use(flash());


app.listen(3000, ()=>{
    console.log("server is listinening to 3000");
});