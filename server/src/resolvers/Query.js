

const version = () => '1.4.8.8'

const products = async (_parent, _args, context, _info) => {

  const foundProducts = await context.prisma.product.findMany()

  return foundProducts
}

const messages = async (_parent, _args, context, _info) => {

  const foundMessages = await context.prisma.message.findMany()

  return foundMessages
}

module.exports = { products, version, messages }