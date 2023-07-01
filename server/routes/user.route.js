const mongoose = require("mongoose")
const express =  require("express")
const { addBlog } = require("../controllers/user.route.controller")

const router = express.Router()

router.get("/add" , addBlog)

module.exports = router