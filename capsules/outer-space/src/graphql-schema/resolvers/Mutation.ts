import { prismaObjectType } from 'nexus-prisma';

const Mutation = prismaObjectType({
  definition: t => t.prismaFields(['*']),
  name: 'Mutation',
});

export default Mutation;
