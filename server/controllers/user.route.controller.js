const express = require("express")

const mongoose = require("mongoose")
const Blog  = require("../models/Blog")

exports.addBlog = function(req,res){
    const tempBlog = new Blog({
        user_id : "Midhun",
        title : "Do you perhaps know jack Bauer. Tap here to see something relavent to Jack Bauer",
        genre : "Jack Bauer",
        content : "Jack Bauer is a Famous personality for Jokes to be wore of some king of sticky stuff based on you imagination he implements on his on"
    })
    tempBlog.save().then(() => res.status(200).json({
        message : "Sucessfully added"
    })).catch((err) => res.status(404).json({
        message : "Not Added! sorry"
    }))
}