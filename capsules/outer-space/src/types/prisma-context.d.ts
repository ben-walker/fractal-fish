import { Prisma } from '../generated/prisma-client';

// To be used as the type for `ctx` in GraphQL resolvers
export interface IPrismaContext {
  prisma: Prisma;
  request: any;
}
