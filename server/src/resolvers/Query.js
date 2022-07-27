const { messages } = require('./Message');
// const { comments } = require('./Comment');
const { message } = require('./Comment');



const Query = {
  messages,
  message,
  // comments,
  version: () => '1.0',
};

module.exports = Query;