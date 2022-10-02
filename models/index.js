const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'id'
});

Post.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, Post };