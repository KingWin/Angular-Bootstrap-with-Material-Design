export default {
  input: './dist/carousel/@angular-bootstrap-md/carousel.es5.js',
  output: {
    file: './dist/carousel/bundles/carousel.umd.js',
    name: 'angularBootstrapMd.carousel',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular-bootstrap-md/utils': 'angularBootstrapMd.utils'
    },
    exports: 'named'
  }
};
