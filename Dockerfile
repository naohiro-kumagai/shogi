# -- sls deploy用 ------------------------------------------------------------

FROM docker:20.10.7-dind AS docker

# -- base ------------------------------------------------------------

FROM node:20.7.0 AS base
# FROM mcr.microsoft.com/playwright:v1.40.0-jammy AS base

ARG USERNAME=node
# ARG USERNAME=pwuser

ARG FUNCTION_DIR="/app"

# RUN apk add --no-cache bash \
#  && mkdir ${FUNCTION_DIR} && chown -R 1000:1000 ${FUNCTION_DIR} \
#  && npm install -g npm@latest

RUN mkdir ${FUNCTION_DIR} && chown -R ${USERNAME}:${USERNAME} ${FUNCTION_DIR} \
 && npm install -g npm@latest

WORKDIR ${FUNCTION_DIR}

USER ${USERNAME}

COPY --chown=${USERNAME}:${USERNAME} package*.json ${FUNCTION_DIR}/
# RUN npm install --omit=dev && npx playwright install
RUN npm install --omit=dev
# COPY --chown=${USERNAME}:${USERNAME} entrypoint.sh /usr/local/bin/entrypoint.sh

# ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]

# -- development ------------------------------------------------------------

FROM base AS development

ARG FUNCTION_DIR="/app"

# ARG USER_DATABASE_URL="file:/tmp/sqlite/user.sqlite"

USER root

ARG USERNAME=node
# ARG USERNAME=pwuser

RUN apt-get update -y \
 && apt-get install -y --no-install-recommends sudo
RUN echo "${USERNAME} ALL=NOPASSWD: ALL" > /etc/sudoers.d/${USERNAME}

USER ${USERNAME}

COPY --from=docker /usr/local/bin/docker /usr/local/bin/

RUN npm install

COPY --chown=${USERNAME}:${USERNAME} . ${FUNCTION_DIR}
# RUN npm run db:migrate && npm run build && rm -rf /tmp/sqlite

CMD [ "npm", "run", "start:dev" ]

# -- production ------------------------------------------------------------

FROM base AS production

USER root

RUN mkdir /tmp/npm-cache \
 && chmod -R 777 /tmp/npm-cache \
 && npm config --global set cache /tmp/npm-cache

ARG USERNAME=node
# ARG USERNAME=pwuser

USER ${USERNAME}

ARG FUNCTION_DIR="/app"

# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/dist ${FUNCTION_DIR}/dist
# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/prisma/migrations ${FUNCTION_DIR}/dist/prisma/migrations
# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/prisma/schema.prisma ${FUNCTION_DIR}/dist/prisma/schema.prisma
# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/prisma/generated/client ${FUNCTION_DIR}/prisma/generated/client
# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/prisma/generated/client ${FUNCTION_DIR}/dist/prisma/generated/client

# COPY --from=development --chown=${USERNAME}:${USERNAME} ${FUNCTION_DIR}/prisma/seed.csv ${FUNCTION_DIR}/prisma/seed.csv
# COPY --chown=${USERNAME}:${USERNAME} ./chinook.sqlite ${FUNCTION_DIR}/

# AWS Lambda Web Adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1 /lambda-adapter /opt/extensions/lambda-adapter
# Web アプリが Listen しているポート番号
ENV PORT 3000
# Web サーバーの起動確認をするための API エンドポイントのパス
ENV READINESS_CHECK_PATH /hc

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
