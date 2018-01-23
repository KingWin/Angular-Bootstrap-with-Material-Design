export default {
  input: './dist/charts/@angular-bootstrap-md/charts.es5.js',
  output: {
    file: './dist/charts/bundles/charts.umd.js',
    name: 'angularBootstrapMd.charts',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core'
    },
    exports: 'named'
  }
};
