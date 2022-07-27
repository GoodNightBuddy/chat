async function createProduct(parent, args, context, _info) {
  return context.prisma.product.create({data: args.product})
}

async function createMessage(parent, args, context, _info) {
  return context.prisma.message.create({data: args.message})
}

module.exports = {
  createProduct,
  createMessage
}