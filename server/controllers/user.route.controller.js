const express = require("express")
const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const Blog = require("../models/Blog");
const User = require("../models/User")
const { verifyAuth } = require("../middleware/tokenAuth")
const jwt = require("jsonwebtoken");

function generateToken(user) {
    return jwt.sign({
        user_name: user.user_name,
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
        iss: "FinanceClub"
    }, process.env.JWT_SECRET);
}
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
    const { user_name, password } = req.query;
    bcrypt.hash(password, 10, (err, hash) => {
        const tempUser = new User({
            user_name: user_name,
            password: hash,
        });
        tempUser.save().then(() => {
            console.log("User " + tempUser.user_name + " registered Successfully...")
            res.status(200).json({
                message: "successfully created the user : " + user_name,
                success: true
            })
        })
            .catch((err) => {
                console.log(err)
                res.status(200).json({
                    message: "Unsucessful User Creation",
                    success: false
                })
            })
        if (err) {
            console.log(err);
        }
    });


}


exports.logUser = async (req, res) => {
    const { user_name, password } = req.query;
    const tempUser = await User.findOne({ user_name: user_name }).then((result) => result);
    if (!tempUser) {
        return res.status(200).json({
            success: false,
            message: "User not found"
        })
    }
    bcrypt.compare(password, tempUser.password, (err, result) => {
        if (result) {
            console.log("User " + tempUser.user_name + " logged in...")
            return res.status(200).json({
                success: true,
                message: "User Authenticated",
                token: generateToken(tempUser)
            })
        }
        else {
            return res.status(200).json({
                success: false,
                message: "Check the password and try again!"
            })
        }

    }, 10)
}

exports.userIdCheck = async (req, res) => {
    const { user_name } = req.query;
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


exports.verifyAuthUser = (req, res) => {
    const { token } = req.query;
    console.log(token);
    if (!token) {
        return res.status(200).json({
            auth: false
        })
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                return { auth: false }
            }
            return { auth: true, user_name: result.user_name }
        })
    }
}