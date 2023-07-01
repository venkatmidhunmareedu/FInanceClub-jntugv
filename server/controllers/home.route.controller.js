const express = require("express")
const mongoose = require("mongoose")
const Blog = require("../models/Blog")

exports.getBlogs = function (req,res) {
    Blog.find({}).then((data) => {
        res.status(200).json({
            data  : data,
            count : data.length
        })
    }).catch((err) => {
        res.send("error")
    })
}

exports.getOneBlog = function (req,res) {
    res.status(200).json({
        message : "return only one blog"
    })
}