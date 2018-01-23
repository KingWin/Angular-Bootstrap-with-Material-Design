export default {
  input: './dist/buttons/@angular-bootstrap-md/buttons.es5.js',
  output: {
    file: './dist/buttons/bundles/buttons.umd.js',
    name: 'angularBootstrapMd.buttons',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/forms': 'ng.forms'
    },
    exports: 'named'
  }
};
