FROM node:18.15.0 AS BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .eslintrc.cjs .prettierrc.json index.html jsconfig.json vite.config.js ./

COPY src ./src
COPY public ./public

RUN npm run build

FROM node:18.15.0-alpine3.17

WORKDIR /app

RUN npm install -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -s -l $PORT
