import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platform-browser',
  '@angular/forms': 'ng.forms',
  '@ngrx/store': 'ngrx.store',
};

export default {
  entry: './dist/ngrx/forms.es5.js',
  dest: './dist/bundles/forms.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ngrx.forms',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals,
  onwarn: () => { return }
}
