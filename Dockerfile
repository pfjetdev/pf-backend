# ── Stage 1: install dependencies ──
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm ci --ignore-scripts \
 && npx prisma generate

# ── Stage 2: build ──
FROM node:20-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/src/generated ./src/generated
COPY . .

RUN npx nest build

# ── Stage 3: production image ──
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production

# Only copy what we need to run
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/src/generated ./src/generated
COPY --from=build /app/dist ./dist
COPY package.json ./

EXPOSE 3001

CMD ["node", "dist/main"]
