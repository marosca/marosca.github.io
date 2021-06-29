# use more lightweight alpine version of node
FROM node:12.7-alpine

ENV PORT 80
ARG BUILD_SSR_DIR=.
ARG BUILD_BROWSER_DIR=.
# set up app directory
ENV HOME=/usr/src/app/
RUN mkdir -p $HOME

# Change directory so that the following commands run within the app directory
WORKDIR $HOME

# Copy application code to container
COPY package.json $HOME
# COPY .npmrc $HOME
COPY $BUILD_SSR_DIR/dist/marosca-web/server dist/server
COPY $BUILD_BROWSER_DIR/dist/marosca-web/browser dist/browser
COPY node_modules node_modules
# COPY server server

# Expose port
EXPOSE $PORT

CMD ["yarn", "start:ssr"]