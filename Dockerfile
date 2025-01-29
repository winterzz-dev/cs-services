FROM node:22-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build:illustration-maker-web

EXPOSE 3000
CMD ["pnpm", "start:illustration-maker-server"]