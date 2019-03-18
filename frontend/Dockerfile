# FROM nginx:alpine
# COPY /build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine
EXPOSE 8888
WORKDIR /home/node/app
CMD [ "npm", "start" ]