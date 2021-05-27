const { Model, DataTypes } = require('sequelize');

// Set up a config file
const sequelize = require('../');

class Post extends Model {}

Post.init({

});

module.exports = Post;