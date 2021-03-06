const express = require('express');
const { body } = require('express-validator');

const blogController = require('../controllers/blog');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//GET all posts
router.get('/posts', isAuth, blogController.getPosts);

//ADD new post
router.post('/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ], blogController.postPost);

router.get('/post/:postId', blogController.getPost);

router.put('/post/:postId', [
  body('title')
    .trim()
    .isLength({ min: 5 }),
  body('content')
    .trim()
    .isLength({ min: 5 })
], isAuth, blogController.updatePost);

router.delete('/post/:postId', isAuth, blogController.deletePost);

module.exports = router;