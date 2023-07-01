const express = require("express")
const {getOneBlog , getBlogs} = require("../controllers/home.route.controller")


const router = express.Router();

router.get("/getall" , getBlogs )

router.get("/getone" , getOneBlog)







module.exports = router;