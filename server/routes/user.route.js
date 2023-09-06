const mongoose = require("mongoose")
const express =  require("express")
const { addBlog, addUser, userIdCheck, logUser, verifyAuthUser, sessionAuth, saveAsDraft, publish } = require("../controllers/user.route.controller")

const router = express.Router()

router.get("/addBlog" , addBlog);
router.get("/addUser" , addUser);
router.get("/userIdCheck" , userIdCheck);
router.get("/login" , logUser);
router.get("/verifyAuth" , verifyAuthUser);
router.get("/sessionAuth" , sessionAuth);
router.get("/saveasdraft" , saveAsDraft);
router.get("/publish" , publish);

module.exports = router