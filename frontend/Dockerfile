FROM node:20.9.0-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src
COPY public ./public
COPY tsconfig.json ./tsconfig.json
COPY next-env.d.ts ./next-env.d.ts
COPY *.config.js ./

COPY .env .env

CMD ["npm", "run", "dev"]