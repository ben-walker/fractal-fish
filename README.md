# fractal-fish

## Overview

Online poker.

## Tech

> **Bold** items are final

### Backend Stack

| Problem Area | Solution |
| --- | --- |
| Language | **[TypeScript](https://github.com/microsoft/TypeScript)** |
| Environment | **[Node](https://github.com/nodejs/node)** |
| Server Framework | **[Express](https://github.com/expressjs/express)** |
| Query Language | **GraphQL** |
| API Server | **[apollo-server-express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)** |
| Data Access Layer | **[Prisma](https://github.com/prisma/prisma)** |
| Database | **MongoDB** |

### Frontend Stack

| Problem Area | Solution |
| --- | --- |
| Environment | [react](https://github.com/facebook/react/) |
| Framework | [material-ui](https://material-ui.com/)/[grommet](https://v2.grommet.io/) |
| State management | [redux](https://github.com/reduxjs/redux) |
| Data fetching | [react-apollo](https://github.com/apollographql/react-apollo) |
| Routing | [react-router](https://github.com/ReactTraining/react-router) |

### Tooling

> Docker???

| Problem Area | Solution |
| --- | --- |
| Repo management | Lerna (probably overkill) |
| Package manager | **[npm](https://github.com/npm/cli)** |
| Bundling | **[webpack](https://github.com/webpack/webpack)** |

## Backend Dev Build Process ([outer-space/](./outer-space/))

- **Prisma Server** - Deploying the DAL (Data Access Layer)
  1. Create the Environment
      - A `.env` file is required in the project route ([outer-space/](./outer-space/)).
      - The environment file must define the variables required by [docker-compose.yml](./outer-space/docker-compose.yml), [prisma.yml](./outer-space/prisma/prisma.yml), and any other relevant file.
  2. Dockerize Prisma - `docker-compose up -d`
      - Start the Prisma server container in the background.
      - Bootstrap the service via [docker-compose.yml](./outer-space/docker-compose.yml).
  3. Authenticate with Prisma
      - The environment variable `PRISMA_MANAGEMENT_API_SECRET` must be set to the correct value to deploy Prisma.
  4. Deploy Prisma - `prisma deploy`
      - Deploy the [prisma.yml](./outer-space/prisma/prisma.yml) service config to the Prisma service container created in step 1.
      - Generate a TypeScript Prisma client from [datamodel.prisma](./outer-space/prisma/datamodel.prisma).
        - Prisma client can be accessed on a resolver's context.
      - Generate TypeScript CRUD building blocks for [datamodel.prisma](./outer-space/prisma/datamodel.prisma) using `nexus-prisma-generate`.
        - These building blocks are used in conjunction with `nexus-prisma` to define the GraphQL API in [graphql-schema/](./outer-space/src/graphql-schema).

- **API Server**
  1. Start the Server - `npm run start`
      - Use [webpack.common.ts](./outer-space/webpack.common.ts) and [webpack.dev.ts](./outer-space/webpack.dev.ts) to bundle and deploy code.
      - All TypeScript in [src/](./outer-space/src/) is linted, compiled, and bundled into a `build` directory.
      - `nodemon` runs the bundled application.
      - `webpack` watches for changes in [src/](./outer-space/src/).
      - `nexus-prisma` generates the final GraphQL schema which will be available through the API server.

## Design

### From Above

- TBD
