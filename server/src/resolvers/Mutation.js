function postProduct(_parent, _args, _context, _info) {
  return _context.prisma.createProducr({
    title: _args.title,
    price: _args.price
  })
}

module.exports = {
  postProduct
}