const { readFileSync } = require('fs');
const { createServer } = require("@graphql-yoga/node");
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const { PrismaClient } = require('@prisma/client/edge')


const prisma = new PrismaClient()

const typeDefs = readFileSync(require.resolve('./schema.graphql')).toString('utf-8')

const resolvers = {
  Query,
  Mutation
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  context: { prisma }
});

server.start();
