const { readFileSync } = require('fs');
const { createServer, createPubSub } = require("@graphql-yoga/node");
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
// const Subscription = require('./resolvers/Subscription')
const { PrismaClient } = require('./generated/prisma-client-js')


const prisma = new PrismaClient()

const typeDefs = readFileSync(require.resolve('./schema.graphql')).toString('utf-8')

const resolvers = {
  Query,
  Mutation,
  // Subscription
};

const pubSub = createPubSub()

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  context: { prisma, pubSub }
});

server.start();
