async function createMessage(parent, args, context, _info) {
  const createdMessage = await context.prisma.message.create({data: args.message})
  context.pubSub.publish('NEW_MESSAGE', createdMessage);
  return createdMessage
}

module.exports = {
  createMessage
}