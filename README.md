### RollUpNote

	練習設定rollup bundlers 並同時比較與webpack bundle後的差距

#### rollup 環境建置

	* npm install --save-dev rollup
	* plugins
		* rollup-plugin-babel
		* rollup-plugin-eslint
	* rollup -c 開始bundle

#### config檔案
```
export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cms'
  },
  plugins: [
	eslint({
        exclude: 'src/less/**',
        fix: true,
    }),
  	babel({
  		exclude: 'node_modules/**',
  	}),
  ]
};
```

* input - 檔案進入點，同webpack中的entry
* output - 檔案輸出相關設置
* plugins - plugin使用
