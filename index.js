const express=require("express")
const connection=require("./connection")
const path=require("path")
const session = require('express-session');
const flash = require('connect-flash');
const app=express()
const port=4005
app.use(session({
    secret: '123',  // A secret key for signing the session ID cookie
    resave: false,              // Don't save session if unmodified
    saveUninitialized: true     // Save new session
}));
app.use(flash());
const userrouter=require("./routes/user")
//connecting mongodb
connection.connectMongodb('mongodb://127.0.0.1:27017/student')
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//middlewire
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/user",userrouter)
app.listen(port,()=>console.log("Server started"))
