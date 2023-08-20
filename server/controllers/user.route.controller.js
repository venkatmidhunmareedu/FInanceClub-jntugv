const express = require("express")
const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const Blog = require("../models/Blog");
const User = require("../models/User")

exports.addBlog = function (req, res) {
    const user_id = req.body.user_id;
    const content = req.body.content;
    const genre = req.body.genre;
    const title = req.body.tile;
    const tempBlog = new Blog({
        user_id, content, genre, title
    })
    tempBlog.save().then(() => res.status(200).json({
        message: "Sucessfully added"
    })).catch((err) => res.status(404).json({
        message: "Not Added! sorry"
    }))
}

exports.addUser = async (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const tempUser = new User({
        user_name: user_name,
        password: hashedPassword,
    });
    tempUser.save().then(() => res.status(200).json({
        message: "successfully created the user",
    }))
        .catch((err) => {
            message: "user creation failed"
        })
}

exports.userIdCheck = async (req, res) => {
    const  { user_name } = req.query;
    console.log(user_name);
    const user = await User.findOne({ user_name: user_name }).then((data) => data).catch((err) => console.log(err));
    try {
        if (user.user_name) {
            return res.status(200).json({
                user_check: true,
            })
        }

    }
    catch (err) {
        return res.status(200).json({
            user_check: false,
        })
    }
}
