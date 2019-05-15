import { Prisma } from '../generated/prisma-client';

// To be used as the type for `ctx` in GraphQL resolvers
export default interface IContext {
  prisma: Prisma;
  request: any;
}
