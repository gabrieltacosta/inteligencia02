# Etapa 1: Construção
FROM node:22-alpine AS builder

WORKDIR /app 

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --production

# Etapa 2: Execução
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./

COPY --from=builder /app/package-lock.json ./

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/next.config.ts ./

COPY --from=builder /app/public ./public

RUN npm install --only=production

EXPOSE 3030

CMD [ "npm", "start" ]