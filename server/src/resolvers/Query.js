

const version = () => '1.4.8.8'

const products = async (_parent, _args, context, _info) => {
  const foundProducts = [
    { id: 1, title: 'Product 1', price: 228 },
    { id: 2, title: 'Product 2', price: 822 }
  ]

  // const foundProducts = await context.prisma.product.findMany()

  return foundProducts
}

module.exports = { products, version }