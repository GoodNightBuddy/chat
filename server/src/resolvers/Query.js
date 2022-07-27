const version = () => '1.4.8.8'

const messages = async (_parent, _args, context, _info) => {

  const foundMessages = await context.prisma.message.findMany()

  return foundMessages
}

module.exports = {
  version,
  messages
}