const mongoose = require("mongoose")

const Connection = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/GVBlogDB', {
    useNewUrlParser: true
  }).then(() => {
    console.log("connected!")
  }).catch((err) => {
    console.log(err)
  })

} 

module.exports = Connection;
