const router = require('express').Router();
const Post = require('../models/PostModal');

router.post('/', async (req, res) => {
  const {
    id,
    slider,
    featured,
    card,
    time,
    date,
    title,
    type,
    description,
    button,
    image,
    user,
    link,
    userProfile,
    quote,
    quoteby,
    content,
  } = req.body;

  const newPost = new Post({
    id,
    slider,
    featured,
    card,
    time,
    date,
    title,
    type,
    description,
    button,
    image,
    user,
    link,
    userProfile,
    quote,
    quoteby,
    content,
  });
  console.log(req.body);

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log('error');
  }
});

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
