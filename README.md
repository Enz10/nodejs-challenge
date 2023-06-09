<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Functionality

```bash
This API uses http://localhost:3000

1- Endpoints for authentication using JWT.
Include an endpoint for refreshing the JWT access token.

- The following endpoint /auth/login must be used with this body request:
  {
      "username": "enzo",
      "password": "baldoceda123"
  }

  Then use the token generated as a header into the different endpoints, like this:

  Authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVuem8iLCJzdWIiOjEsImlhdCI6MTY4NjI4Njk2NCwiZXhwIjoxNjg2Mjg4NzY0fQ.28IoGL1IoT3LDYP2G6ZBxsMLlGcHIsu1TDC6nuURe9g

  For token refresh use this endpoint /auth/refresh and the previous token as a Authorization header like the previous step.

2- Endpoint for retrieving movies. It should be allowed to filter and sort by some field.

  You can filter by any field of movies, in this example is filtering by name 'Inception' and ordering by rating ascendant
  /entertainment/movies?where[name]=Inception&order[rating]=ASC

3- Endpoint for retrieving the information (director included) of a specific episode of a TV Show

  This endpoint retrieves the information /entertainment/movies

4- Endpoint for adding a new object (it could be for any entity you like).

  I chose the Director entity, this is the endpoint which creater a new one: /entertainment/directors

  Body example:
  {
    "name": "Tarantino",
    "birthdate": "1980-04-23",
    "nationality": "American"
  }

```