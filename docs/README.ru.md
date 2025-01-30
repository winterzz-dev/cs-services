# cs-services

Актуальные сервисы:

Эта страница на [английском](../README.md)

- [Illustration-maker (https://illustration.cs-services.tech)](https://illustration.cs-services.tech) позволяет подготовить GIF-картинку для публикации в формате витрины в профиле Steam.

Набор полезных инструментов для геймеров.

## Необходимое ПО

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

## Установка зависимостей

```shell
  pnpm install
```

## Запуск

Для сборки фронтенда, сборки и запуска сервера:

```shell
  pnpm build:illustration-maker-web
  pnpm build:illustration-maker-server
  pnpm start:illustration-maker-server
```

После этого сервер будет доступен по адресу `http://localhost:3000` и будет раздавать статику из папки `./illustration-maker-web/dist`.