const router = require('express').Router();

const userRoutes = require('./user-controller.js');
const postRoutes = require('./post-controller');
const commentRoutes = require('./comments-controller');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
