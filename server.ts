import 'zone.js/node';
const domino = require('domino');
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { readFileSync } from 'fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';
import { Request } from 'express';

import { HOSTNAME } from './src/server/hostname.token';

function setLocation(location: Location, req: Request) {
  location.host =
    req.get('host') || 'localhost:' + (process.env['PORT'] || 4200);
  location.href = req.protocol + '://' + location.host + req.url;
  location.protocol = req.protocol;
  location.pathname = req.originalUrl;
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-landingpage/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  const template = readFileSync(join(distFolder, 'index.html')).toString();
  const window = domino.createWindow(template);
  (global as any).location = {};
  (global as any).window = window;
  (global as any).document = window.document;
  (global as any).Event = window.Event;
  (global as any).KeyboardEvent = window.KeyboardEvent;
  (global as any).MouseEvent = window.MouseEvent;
  (global as any).FocusEvent = window.FocusEvent;
  (global as any).PointerEvent = window.PointerEvent;
  (global as any).HTMLElement = window.HTMLElement;
  (global as any).navigator = window.navigator;
  (global as any).localStorage = window.localStorage;
  (global as any).DOMTokenList = window.DOMTokenList;

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    setLocation(location, req);
    const hostname = req.hostname;
    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: 'hostname', useValue: hostname },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

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