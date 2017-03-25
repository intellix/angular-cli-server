import 'zone.js/dist/zone-node';

import * as express from 'express';
import { AppServerModule } from './app/app.server.module';
// TODO: I think this is being added to core
import { ngExpressEngine } from './ng-express-engine';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

// TODO: We might need to alter @ngtools/webpack
app.engine('html', ngExpressEngine({
  baseUrl: baseUrl,
  bootstrap: [AppServerModule]
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', { index: false }));

[].forEach(route => {
  app.get(route, (req, res) => {
    res.render('index', {
      req: req
    });
  });
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
