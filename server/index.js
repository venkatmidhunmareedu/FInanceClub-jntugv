const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const Connection  = require("./config/db")
const homeRoute = require("./routes/home.route")
const userRoute = require("./routes/user.route")
const cors = require("cors")
require('dotenv').config()

const app = express()

Connection() //DB connection

app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use( "/", homeRoute);
app.use("/user" , userRoute)


app.listen(5000, () => {
    console.log("Server is running in port 5000");
})