const express = require("express")
const mongoose = require("mongoose")
const Blog = require("../models/Blog")

exports.getBlogs = function (req,res) {
    const { size, pagenum  } = req.query
    var query = {}
    query.skip = parseInt(size) * parseInt(pagenum - 1)
    query.limit = parseInt(size)
    Blog.find({},{},query).then((data) => {
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