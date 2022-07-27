const message = (_parent, args, context, _info) =>
  context.prisma.comment.
    finUnique({ where: { id: parent.id } })
    .message()


//Queries

const comments = async (_parent, _args, context) => {

  const foundComments = await context.prisma.comments.findMany()

  return foundComments
}


// Mutations
const createComment = async (_parent, args, context) => {
  const { comment: { text, messageId } } = args;

  const isMessagetExists = await context.prisma.message.findFirst({
    where: {
      id: messageId,
    },
    select: { id: true },
  }).then(Boolean);

  if (!isMessagetExists) {
    throw new Error(`Product with id ${messageId} does not exist`);
  }

  

  const createdComment = await context.prisma.comment.create({
    data: {
      text,
      message: {
        connect: { id: messageId },
      },
    },
  });

  context.pubSub.publish('NEW_COMMENT', createdComment);

  return createdComment
};

//Subscriptions

const newCommentSubscribe = (_parent, _args, context) => context.pubSub.subscribe('NEW_COMMENT')

const newComment = {
  subscribe: newCommentSubscribe,
  resolve: payload => payload
}


module.exports = {
  message,
  comments,
  newComment,
  createComment
}