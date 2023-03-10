FROM node:16-alpine as builder
WORKDIR /app
COPY . .

RUN npm ci --force
RUN npm run build
ENV NODE_ENV production

FROM nginx:1.15
COPY --from=builder /app/build/ /var/www/dist/
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
RUN apt-get update && apt-get install -y curl

HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
