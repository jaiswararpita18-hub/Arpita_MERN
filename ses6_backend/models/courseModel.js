const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    course: String,
    name: String,
    imageUrl: String,
    category: String,
    duration:String,
    level:String

}, {
    timestamps: true
})

const blogModel = mongoose.model('blogs', blogSchema)

module.exports = blogModel