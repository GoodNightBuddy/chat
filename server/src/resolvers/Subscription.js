const { newMessage } = require('./Message');
const { newComment } = require('./Comment');

const Subscription = {
  newMessage,
  newComment
};

module.exports = Subscription;