const mongoose = require("mongoose")
const express =  require("express")
const { addBlog, addUser, userIdCheck } = require("../controllers/user.route.controller")

const router = express.Router()

router.get("/addBlog" , addBlog);
router.get("/addUser" , addUser);
router.get("/userIdCheck" , userIdCheck);

module.exports = router