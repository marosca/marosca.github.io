### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run buildSSR

### STAGE 2: Run ###
FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/marosca-web /usr/share/nginx/html
RUN echo "www.mariolamoreno.es" > ./usr/share/nginx/html/CNAME