FROM tiangolo/node-frontend:10 as build-stage

FROM nginx:1.15

COPY ./build/ /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf