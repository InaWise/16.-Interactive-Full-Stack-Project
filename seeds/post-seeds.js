const { Post } = require('../models');

const postData = [
    {
        title: 'ItsEvdok',
        post_url: 'filler url',
        user_id: 1
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;