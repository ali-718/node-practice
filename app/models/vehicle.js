var mongoose = require('mongoose')

var Vehicle = new mongoose.Schema({
    make: String,
    model: String,
    color: String
})

module.exports = mongoose.model("Vehicle", Vehicle)