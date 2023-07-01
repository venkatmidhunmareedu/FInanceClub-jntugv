const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const Connection  = require("./config/db")
const homeRoute = require("./routes/home.route")
const userRoute = require("./routes/user.route")
const cors = require("cors")

const app = express()


Connection() //DB connection

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))


app.use( "/", homeRoute);
app.use("/user" , userRoute )


app.listen(5000, () => {
    console.log("Server is running in port 3000");
})