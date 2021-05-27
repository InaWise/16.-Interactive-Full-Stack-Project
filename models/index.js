const comment = require('./comment');
const post = require('./post');
const user = require('./Tag');

// Products belongsTo Category

comment.belongsTo(post, {
  foreignKey: 'post_id'
});

// Categories have many Products
post.hasMany(comment, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
user.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id'
});


module.exports = {
  comment,
  post,
  user,
};
