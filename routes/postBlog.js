const router = require('express').Router();
const Blog = require('../models/BlogModal');

router.post('/', async (req, res) => {
  const { name, email, link, contentState } = req.body;

  const newBlog = new Blog({
    name,
    email,
    link,
    content,
  });
  console.log(req.body);

  try {
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (err) {
    console.log('error');
  }
});

module.exports = router;
