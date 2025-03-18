FROM node:18-alpine

USER root

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY src/ ./src/

EXPOSE 80

CMD ["node", "src/index.js"]
