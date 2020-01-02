import { ApolloServer } from 'apollo-server-express';
import { prisma } from '../../generated/prisma-client';
import graphqlSchema from '../../graphql-schema';

const server = new ApolloServer({
  context: ({ req }) => ({
    ...req,
    db: prisma,
  }),
  schema: graphqlSchema,
});

export default server;
