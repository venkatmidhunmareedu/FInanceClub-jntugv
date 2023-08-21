const mongoose = require("mongoose")

const Connection = function () {
    mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  }).then(() => {
    console.log("connected!")
  }).catch((err) => {
    console.log(err)
  })

} 

module.exports = Connection;
