const express = require('express');
const { addBlog, showblogs, updateBlog, showBlog, delBlog } = require('../controllers/courseController');

const routes = express.Router()

routes.post('/add',addBlog)
routes.get('/',showblogs)
routes.put('/:id',updateBlog)
routes.get('/blog/:id',showBlog)
routes.delete('/:id',delBlog)

module.exports = routes