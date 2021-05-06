# use lightweight alpine version of nginx
FROM nginx:alpine

# Copy app bundle to wwwroot
COPY docs /usr/share/nginx/html
