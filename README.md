# cs-services

This page on [russian](./docs/README.ru.md)

Actual services:

- [Illustration-maker (https://illustration.cs-services.tech)](https://illustration.cs-services.tech) allows you to prepare a GIF picture for publishing in showcase format in your Steam profile.

A set of useful tools for gamers.

## Required Software

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

## Install dependencies

```shell
  pnpm install
```

## Startup

To build the frontend, build and run the server:

```shell
  pnpm build:illustration-maker-web
  pnpm build:illustration-maker-server
  pnpm start:illustration-maker-server
```

After that the server will be available at `http://localhost:3000` and will distribute statics from the `./illustration-maker-web/dist` folder.

Translated with DeepL.com (free version)