import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  if(window) {
    window.console.log = function () {};
    window.console.warn = function () {};
    window.console.error = function () {};
  }
}
if (!environment.production) {
} else {
  if(window) {
    window.console.log = function () {};
    window.console.warn = function () {};
    window.console.error = function () {};
  }
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
