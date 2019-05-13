import {
  resolvers as helloResolvers,
  typeDef as Hello,
} from './hello';

export const typeDefs = [
  Hello,
];

export const resolvers = {
  ...helloResolvers,
};
