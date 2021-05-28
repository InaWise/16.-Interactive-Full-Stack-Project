const comment = require('./comment');
const post = require('./post');
const user = require('./user');

// Products belongsTo post

comment.belongsTo(post, {
  foreignKey: 'post_id'
});

// Categories have many comments
post.hasMany(comment, {
  foreignKey: 'category_id'
  });

// Products belongToMany Tags//
user.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'user_id'
});


module.exports = {
  comment,
  post,
  user,
};
