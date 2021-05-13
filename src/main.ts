import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/* FICA OBSERVANDO SEMPRE QUE A PAGINA E RECARREGADA */
<<<<<<< HEAD


=======
>>>>>>> af947b594dbb00e3e7d461045a06f7d9cf3c4cd2
/*window.addEventListener('beforeunload', function(event) {
  localStorage.removeItem('token');

}, false);*/
