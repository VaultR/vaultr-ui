import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {})
  .catch(err => console.error(err));
