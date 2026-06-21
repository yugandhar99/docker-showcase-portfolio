FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM base AS dev
EXPOSE 5000
ENTRYPOINT ["npm", "start"]

FROM base AS build
RUN npm run build

FROM nginx:1.25-alpine AS prod
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid &&     chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 5000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
