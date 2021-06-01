const { Post } = require('../models');

const postData = [
    {
        title: 'ItsEvdok',
        content: 'Just seeded!',
        user_id: 1
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;