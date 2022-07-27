const { createMessage } = require('./Message');
const { createComment } = require('./Comment');

const Mutation = {
  createMessage,
  createComment
};

module.exports = Mutation;