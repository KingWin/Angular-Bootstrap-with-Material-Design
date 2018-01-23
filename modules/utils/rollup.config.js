export default {
  input: './dist/utils/@angular-bootstrap-md/utils.es5.js',
  output: {
    file: './dist/utils/bundles/utils.umd.js',
    name: 'angularBootstrapMd.utils',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core'
    },
    exports: 'named'
  }
};
