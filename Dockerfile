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
RUN apk add --no-cache dumb-init \
 && addgroup -S app && adduser -S app -G app
WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps  /app/node_modules  ./node_modules
COPY --from=deps  /app/src/generated ./src/generated
COPY --from=build /app/dist          ./dist
COPY package.json ./

RUN chown -R app:app /app
USER app

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["node", "-e", "fetch('http://localhost:3001/health').then(r=>{if(!r.ok)throw r})"]

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/main"]
