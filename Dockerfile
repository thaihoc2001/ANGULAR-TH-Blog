### Docker build
FROM node:12.19.0-alpine3.10 as builder

WORKDIR /ng-app

COPY . .
#RUN npm run build:prod


FROM nginx:1.19.10

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder ./ng-app/dist/ANGULAR-TH-Blog /usr/share/nginx/html
COPY --from=builder ./ng-app/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
