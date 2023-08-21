const mongoose = require("mongoose")
const express =  require("express")
const { addBlog, addUser, userIdCheck, logUser, verifyAuthUser } = require("../controllers/user.route.controller")

const router = express.Router()

router.get("/addBlog" , addBlog);
router.get("/addUser" , addUser);
router.get("/userIdCheck" , userIdCheck);
router.get("/login" , logUser);
router.get("/verifyAuth" , verifyAuthUser);

module.exports = router