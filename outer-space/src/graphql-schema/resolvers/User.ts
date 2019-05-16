import { prismaObjectType } from 'nexus-prisma';

const User = prismaObjectType({
  name: 'User',
  definition (t) {
    t.prismaFields(['*']);
  },
});

export default User;
