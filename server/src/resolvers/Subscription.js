const newProductSubscribe = (_parent, _args, context) => context.pubsub.subscribe('NEW_MESSAGE')

const newProduct = {
  subscribe: newProductSubscribe,
  resolve: payload => payload
}


const newMessageSubscribe = (_parent, _args, context) => context.pubsub.subscribe('NEW_MESSAGE')

const newMessage = {
  subscribe: newMessageSubscribe,
  resolve: payload => payload
}

module.exports = {
  newProduct,
  newMessage
}