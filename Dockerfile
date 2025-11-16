FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist .

CMD ["serve", "-l", "4200", "brand-ms-web-app/browser"]
