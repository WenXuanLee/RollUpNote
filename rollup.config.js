// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // The format of the generated bundle - amd, cjs, es, iife, umd 
    sourcemap: 'inline',
  },
  plugins: [
  	resolve({
  		jsnext: true, // affect most packages
  		main: true,
  		browser: true,
  	}),
  	commonjs(),
	eslint({
        exclude: 'src/less/**',
        fix: true,
    }),
  	babel({
  		exclude: 'node_modules/**',
  	}),
  	uglify()
  ]
};