import build from './builder';
import { packages } from './config';

build({
  scope: '@angular-bootstrap-md',
  packages
}).catch(err => {
  console.error(err);
  process.exit(1);
});
