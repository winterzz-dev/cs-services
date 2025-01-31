FROM node:22-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build:fast-stats-web
RUN pnpm build:fast-stats-server

EXPOSE 3000
CMD ["pnpm", "start:fast-stats-server"]