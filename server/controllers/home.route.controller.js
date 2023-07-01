const express = require("express")
const mongoose = require("mongoose")


exports.getBlogs = function (req,res) {
    res.status(200).json({
        message : "returned all  the blogs"
    });
}

exports.getOneBlog = function (req,res) {
    res.status(200).json({
        message : "return only one blog"
    })
}