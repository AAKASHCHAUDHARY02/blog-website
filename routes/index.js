const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Home Route
router.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts: posts });
});

// New Post Route
router.get('/new', (req, res) => {
  res.render('new-post');
});

// Create Post Route
router.post('/', async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });
  await newPost.save();
  res.redirect('/');
});

module.exports = router;
