
//Queries
const messages = async (_parent, _args, context) => {

  const foundMessages = await context.prisma.message.findMany()

  return foundMessages
}

const comment = (_parent, args, context, _info) => 
  context.prisma.message.
    finUnique({where: {id: parent.id}})
    .comment()


//Mutations

async function createMessage(_parent, args, context, _info) {
  const createdMessage = await context.prisma.message.create({data: args.message})
  context.pubSub.publish('NEW_MESSAGE', createdMessage);
  return createdMessage
}


//Subscriptions

const newMessageSubscribe = (_parent, _args, context) => context.pubSub.subscribe('NEW_MESSAGE')

const newMessage = {
  subscribe: newMessageSubscribe,
  resolve: payload => payload
}



module.exports = {
  comment,
  messages,
  newMessage,
  createMessage
}