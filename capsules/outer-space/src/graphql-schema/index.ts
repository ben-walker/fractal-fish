import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';
import nexusPrisma from '../generated/nexus-prisma';
import { prisma } from '../generated/prisma-client';
import * as allTypes from './resolvers';

const schema = makePrismaSchema({
  outputs: {
    schema: path.resolve('src/generated/schema.graphql'),
    typegen: path.resolve('src/generated/nexus.ts'),
  },
  prisma: {
    client: prisma,
    datamodelInfo: nexusPrisma,
  },
  typegenAutoConfig: {
    contextType: 'types.IContext',
    sources: [
      {
        alias: 'types',
        source: path.resolve('src/types/prisma-context.d.ts'),
      },
    ],
  },
  types: allTypes,
});

export default schema;
