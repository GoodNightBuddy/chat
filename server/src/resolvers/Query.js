

const version = () => '1.4.8.8'

const products = (_parent, _args, _context, _info) => {
  const foundProducts = [
    { id: 1, title: 'Product 1', price: 228 },
    { id: 2, title: 'Product 2', price: 822 }
  ]

  return foundProducts
}

module.exports = { products, version }