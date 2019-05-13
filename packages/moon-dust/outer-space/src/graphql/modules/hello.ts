import { gql } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

export const typeDef = gql`
  type Query {
    helloWorld: String!
  }
`;

export const resolvers: IResolvers = {
  Query: {
    helloWorld: (): string => 'Hello world!',
  },
};
