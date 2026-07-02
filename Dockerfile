# syntax=docker/dockerfile:1

# ---- Build stage ----
# Debian slim (not alpine) so sharp's prebuilt glibc binaries work.
FROM node:26.3.1 AS build

# pnpm via corepack; version is pinned by package.json "packageManager".
RUN npm install -g corepack@latest
RUN corepack enable
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

# Install deps first, separately from source, so this layer is cached
# whenever the lockfile is unchanged. BuildKit cache mount keeps the pnpm
# store warm across builds even when Docker prunes layers.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline

COPY . .

# astro build only — typecheck (astro check) runs in CI, not the deploy path.
# NOTE: do NOT cache node_modules/.astro across builds. It holds the content-layer
# data-store (rendered HTML keyed by a content digest). A fresh git clone reproduces
# identical file contents, so digests match and Astro reuses the cached store while
# skipping regeneration of the rendered-content modules — leaving <Content /> empty
# on single-post pages. Rebuild the store from scratch every deploy.
RUN pnpm exec astro build

# ---- Runtime stage ----
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Only the built site ships in the final image. node_modules never enters it.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
