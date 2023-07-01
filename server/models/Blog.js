const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = new mongoose.model("Blog" , blogSchema);

