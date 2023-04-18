FROM node:18.14.2 as builder
WORKDIR /usr/src/app
COPY package.json .
RUN yarn

COPY . .
RUN yarn run build

FROM nginx:latest
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
