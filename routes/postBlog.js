const express = require('express');
const Blog = require('../models/BlogModal');
const bodyParser = require('body-parser');
const blogRouter = express.Router();

blogRouter.use(bodyParser.json());
blogRouter.route('/').post((req, res, next) => {
  Blog.create(req.body)
    .then(
      (blog) => {
        console.log('Blog Created ', blog);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blog);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = blogRouter;
