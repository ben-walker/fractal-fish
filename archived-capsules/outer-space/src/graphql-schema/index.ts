import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';
import nexusPrisma from '../generated/nexus-prisma';
import { prisma } from '../generated/prisma-client';
import * as allTypes from './resolvers';

const typesAlias = 'types';
const prismaContextHandle = 'IPrismaContext';

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
    contextType: `${typesAlias}.${prismaContextHandle}`,
    sources: [
      {
        alias: typesAlias,
        source: path.resolve('src/types/prisma-context.d.ts'),
      },
    ],
  },
  types: allTypes,
});

export default schema;
