// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import less from 'rollup-plugin-less';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // The format of the generated bundle - amd, cjs, es, iife, umd 
    sourcemap: 'none',
  },
  plugins: [
  	resolve({
  		jsnext: true, // affect most packages
  		main: true,
  		browser: true,
  	}),
  	commonjs(),
  	less(),
	eslint({
        exclude: 'src/less/**',
        fix: true // rollup-eslint autofix 只針對bundle後的檔案做fix動作
    }),
  	babel({
  		exclude: 'node_modules/**',
  	}),
  	uglify()
  ]
};