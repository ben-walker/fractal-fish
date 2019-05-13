import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import {
  resolvers,
  typeDefs,
} from './modules';

const schema: GraphQLSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
