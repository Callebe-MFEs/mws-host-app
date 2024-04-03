FROM nginx:1.23.3-alpine as build

LABEL name="mws-host-app" \
      description="My Workspace host application application"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mws-host-app: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./dist .

USER nginx
