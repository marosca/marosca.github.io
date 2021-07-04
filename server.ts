(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');
const domino = require('domino');
const fs = require('fs');
const path = require('path');

const distFolder = join(process.cwd(), 'dist/marosca-web/browser');
const template = fs
  .readFileSync(path.join(distFolder, 'index.html'))
  .toString();

const win = domino.createWindow(template.toString());
global['window'] = win;
global['document'] = win.document;
global['self'] = win;
global['IDBIndex'] = win.IDBIndex;
global['document'] = win.document;
global['navigator'] = win.navigator;
global['getComputedStyle'] = win.getComputedStyle;

import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

const redis = require('redis');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/marosca-web/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Redis cache client
  // Connect to a local redis intance locally, and the Heroku-provided URL in production
  let REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
  const redisClient = redis.createClient(REDIS_URL);

  // Creates a cache key using the request URL
  const cacheKey: (req: express.Request) => string = (req) => {
    console.log(`ssr_${req.originalUrl}`);
    return `ssr_${req.originalUrl}`;
  };

  const DELETE_CACHE = '/delete';
  const DELETE_ALL_CACHE = '/deleteall';

  console.warn('process.env.REDIS_URL', process.env.REDIS_URL);
  // Universal express-engine
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );
  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Middleware to send a cached response if one exists
  const cachedResponse: express.RequestHandler = (req, res, next) =>
    redisClient.get(cacheKey(req), (error: Error, reply: string) => {
      if (reply?.length) {
        // Cache exists. Send the response.
        res.send(reply);
      } else {
        // Use the Universal engine to render a response.
        next();
      }
    });

  // Middleware to render a response using the Universal engine
  const universalRenderer: express.RequestHandler = (req: any, res) => {
    res.render(
      indexHtml,
      {
        req,
        providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
      },
      (error: Error, html: string) => {
        if (error) {
          return req.next(error);
        }
        if (
          res.statusCode === 200 &&
          req.originalUrl.indexOf(DELETE_CACHE) === -1
        ) {
          // Cache the rendered HTML
          redisClient.set(cacheKey(req), html);
        }
        res.send(html);
      }
    );
  };

  // Serve static files from dist/browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  server.get(`${DELETE_CACHE}*`, (req, res, next) => {
    const urlToDelete = req.originalUrl.split(DELETE_CACHE)[1];
    redisClient.del(`ssr_${urlToDelete}`);
    console.log('Borrada la url: ', urlToDelete);
    // redisClient.flushdb();
  });

  server.get(DELETE_ALL_CACHE, (req, res, next) => {
    redisClient.flushdb();
    console.log('Borrada TODA la cache');
  });

  // All regular routes use the Universal engine
  server.get('*', cachedResponse, universalRenderer);

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
