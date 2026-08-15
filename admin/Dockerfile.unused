# syntax=docker/dockerfile:1

# ---- Build stage ----
# Debian slim (not alpine) so sharp's prebuilt glibc binaries work.
FROM node:26.3.1-slim AS build

# pnpm via corepack; version is pinned by package.json "packageManager".
RUN npm install -g corepack@latest
RUN corepack enable
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

# Workspace manifests first (cached until a manifest/lockfile changes).
# All members copied because --frozen-lockfile validates the whole workspace.
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY admin/package.json admin/package.json
COPY blog/package.json blog/package.json
COPY shared/package.json shared/package.json
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline --filter admin...

COPY . .

RUN pnpm --filter admin exec astro build

# ---- Runtime stage ----
# Plain node (no nginx): the Astro standalone server listens itself.
# Same base image + same /app path as the build stage, so pnpm's node_modules
# symlink farm (admin/node_modules -> ../node_modules/.pnpm/...) stays valid
# when the whole tree is copied over.
FROM node:26.3.1-slim AS runtime

ENV NODE_ENV=production
# @astrojs/node standalone reads HOST/PORT. 0.0.0.0 so the container is reachable.
ENV HOST=0.0.0.0
ENV PORT=4321
ENV BLOG_POSTS_ROOT=/app/blog/src/blog

WORKDIR /app/admin

# Copy the whole workspace tree (node_modules + built dist) intact.
COPY --from=build /app /app

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
