# syntax=docker/dockerfile:1

# Build context is the REPO ROOT (not blog/).

# ---- Build stage ----
# Debian slim (not alpine) so sharp's prebuilt glibc binaries work.
FROM node:26.3.1-slim AS build

# pnpm via corepack; version is pinned by package.json "packageManager".
RUN npm install -g corepack@latest
RUN corepack enable
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

# Workspace manifests + every package's manifest first, separately from
# source, so this layer is cached whenever nothing but source changes.
# All workspace members are copied because --frozen-lockfile validates the
# whole workspace against the lockfile. BuildKit cache mount keeps the pnpm
# store warm across builds even when Docker prunes layers.
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY blog/package.json blog/package.json
COPY shared/package.json shared/package.json
COPY admin/package.json admin/package.json
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline --filter blog...

COPY . .

RUN pnpm --filter blog exec astro build
RUN pnpm --filter blog test

# ---- Runtime stage ----
FROM nginx:alpine AS runtime

COPY blog/nginx.conf /etc/nginx/conf.d/default.conf

# Only the built site ships in the final image. node_modules never enters it.
COPY --from=build /app/blog/dist /usr/share/nginx/html

EXPOSE 80
