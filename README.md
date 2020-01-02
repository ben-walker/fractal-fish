# Fractal Fish

## Overview

A web thing.

## Technology

> **Bold** items are final (maybe, probably).

| Problem Area | Solution |
| --------------- | ------------------------------------------------- |
| Continuous Integration | **[CircleCI](https://circleci.com/docs)** |
| Image Builds | **[Skaffold](https://github.com/GoogleContainerTools/skaffold)** |

## Monorepo Layout

### Microservices

- [Hashit](./services/hashit/) encodes passwords with argon2, and validates that a plain password matches an encoded hash

### Archived Packages

- [outer-space](./archived/outer-space/) (Express/GraphQL backend) - **Deprecated**
- [moon-dust](./archived/moon-dust/) (React frontend) - **Deprecated**
- [potential-well](./archived/potential-well) (Koa server) - **Deprecated**
- [strange-charm](./archived/strange-charm) (Vue SSR frontend) - **Deprecated**
