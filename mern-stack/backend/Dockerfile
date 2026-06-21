FROM node:18-alpine AS base

WORKDIR /app
EXPOSE 5000

FROM base AS dev
COPY package*.json ./
RUN npm ci
COPY . .
ENTRYPOINT ["npm", "run", "dev"]

FROM base AS prod
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY . .
RUN addgroup -S app && adduser -S -G app app &&     chown -R app:app /app
USER app
ENTRYPOINT ["npm", "start"]
