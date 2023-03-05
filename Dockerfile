FROM node:16-alpine as builder
WORKDIR /app
COPY . .

RUN npm ci --force
RUN npm run build
ENV NODE_ENV production

EXPOSE 3000
CMD [ "npm", "start" ]