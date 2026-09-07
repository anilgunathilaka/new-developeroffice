import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join, relative, sep } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { NextFunction, Request, Response } from 'express';
import hbs = require('hbs');
import { AppModule } from './app.module';
import { registerHbsHelpers } from './common/hbs-helpers';
import { csrfLocalsMiddleware } from './common/csrf';

/**
 * Register every .hbs file under the partials dir synchronously, using its path
 * relative to the partials root as the name (so views/partials/viz/ocr.hbs
 * becomes the partial "viz/ocr"). Synchronous so all partials exist before the
 * first request, and recursive so nested folders like viz/ are picked up.
 */
function registerNestedPartials(dir: string, root = dir): void {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      registerNestedPartials(full, root);
    } else if (entry.name.endsWith('.hbs')) {
      const name = relative(root, full).replace(/\.hbs$/, '').split(sep).join('/');
      hbs.registerPartial(name, readFileSync(full, 'utf8'));
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Static assets: hand-written CSS, vanilla JS, fonts, images (CLAUDE.md §4).
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
  });

  // Handlebars MVC.
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  // Default layout for every rendered view (the hbs package reads this from
  // Express "view options"). Views render into {{{body}}} of layouts/main.hbs.
  app.set('view options', { layout: 'layouts/main' });
  const partialsDir = join(__dirname, '..', 'views', 'partials');
  // Synchronous, recursive registration so every partial (including nested
  // viz/*.hbs) exists before the first request.
  registerNestedPartials(partialsDir);
  registerHbsHelpers();

  // Partials are read into memory at boot. Re-read in development so .hbs
  // edits show up without a full server restart.
  if (process.env.NODE_ENV !== 'production') {
    app.use((_req: Request, _res: Response, next: NextFunction) => {
      registerNestedPartials(partialsDir);
      next();
    });
  }

  app.use(csrfLocalsMiddleware);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Developer Office running on http://localhost:${port}`);
}
bootstrap();
