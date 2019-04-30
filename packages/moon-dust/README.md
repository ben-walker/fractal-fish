# fractal-fish

## Overview

Online poker.

## Tech

> **Bold** items are final

### Backend Stack

| Problem Area | Solution |
| --- | --- |
| Environment | **Node.js** |
| Framework | **Express** |
| API | **GraphQL/Apollo** |
| Database | **MongoDB** |
| ORM | **Mongoose** |
| Authentication | jwt/passport? |

### Frontend Stack

| Problem Area | Solution |
| --- | --- |
| Environment | **Vue.js** |
| Framework | **Vuetify** |
| State management | **Vuex** |
| Routing | **Vue-router** |

### Repo Tools

| Problem Area | Solution |
| --- | --- |
| Repo management | Lerna |
| Package manager | **npm** |

## Design

### From Above

* Multiple GraphQL microservices
  * Service mesh for discoverability between the services
* One GraphQL API gateway that defines a shared schema; see [this post](https://stackoverflow.com/questions/38071714/graphql-and-microservice-architecture) for more info
