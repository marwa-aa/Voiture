// independence
//load express
const express = require('express');
const expressLayouts = require("express-ejs-layouts");

//initialize express
const app = express()

//require and initialize dotenv
require('dotenv').config();

//port configuration
const port = process.env.PORT;

//database configuration
const db = require("./config/db");

//Import Routes
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const carRouter = require("./routes/car");
const cartypeRouter = require("./routes/cartype");
const authRouter = require("./routes/auth");

//telling Nodejs to look into the folder called views for all the ejs files
app.set("view engine", "ejs");

//Mount Routes
app.use('/', indexRouter);
app.use("/user", userRouter);
app.use("/car", carRouter);
app.use("/cartype", cartypeRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Voiture App is running on port ${port}`);
});