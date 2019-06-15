import { Prisma } from '../generated/prisma-client';

// To be used as the type for `ctx` in GraphQL resolvers
export interface IContext {
  prisma: Prisma;
  request: any;
}
