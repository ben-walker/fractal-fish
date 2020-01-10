# Fractal Fish

[![CircleCI](https://circleci.com/gh/ben-walker/fractal-fish.svg?style=svg)](https://circleci.com/gh/ben-walker/fractal-fish)

## Overview

A web thing.

## Technology

| Problem Area | Solution |
| --------------- | ------------------------------------------------- |
| Continuous Integration | **[CircleCI](https://circleci.com/docs)** |
| Image Builds | **[Skaffold](https://github.com/GoogleContainerTools/skaffold)** |

## Monorepo Layout

### Microservices ([services/](./services))

- [Hashit](./services/hashit/) encodes passwords with argon2, and validates that a plain password matches an encoded hash
- [Auth](./services/auth) performs user authentication, and makes use of the Hashit service

### Archived Packages ([archived/](./archived))

- [outer-space](./archived/outer-space/) (Express/GraphQL backend) - **Deprecated**
- [moon-dust](./archived/moon-dust/) (React frontend) - **Deprecated**
- [potential-well](./archived/potential-well) (Koa server) - **Deprecated**
- [strange-charm](./archived/strange-charm) (Vue SSR frontend) - **Deprecated**
