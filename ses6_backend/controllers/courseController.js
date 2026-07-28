const blogModel = require('../models/courseModel');


exports.addBlog = async (req, res) => {
    const new_blog = new blogModel(req.body)
    const result = await new_blog.save()
    res.status(200).json(result)
}

exports.showblogs = async (req, res) => {
    const blogs = await blogModel.find()
    if (blogs != null) {
        res.status(200).json(blogs)
    } else {
        res.status(404).json({ 'message': 'No Blogs' })
    }
}

exports.showBlog = async (req, res) => {
    const blog = await blogModel.findById(req.params.id)
    if (blog != null) {
        res.status(200).json(blog)
    } else {
        res.status(404).json({ message: 'not record found' })
    }
}

exports.updateBlog = async (req, res) => {
   const blog = await blogModel.findByIdAndUpdate(req.params.id,req.body)
   res.status(200).json({message : 'Course updated successfully...'})
}

exports.delBlog = async (req, res) => {
    const blog = await blogModel.findByIdAndDelete(req.params.id)
    if (blog != null) {
        res.status(200).json({ message: 'Course deleted successfully...' })
    } else {
        res.status(404).json({ message: 'Blog not found...' })
    }
}