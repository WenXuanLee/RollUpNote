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

### Slides 
	整理簡報所講之內容

### Introduction
#### What is rollup
	什麼是Rollup，Webpack競爭對手，module bundler for Javascript，將片段的程式碼組合成一支完整的Code，舉例來說，拼圖的每一塊小碎片都是一個module，我們在玩拼圖的角色就像是module bundler一樣，將拼圖組成一幅完整的作品，Rollup bundler主要是依據最新modules的標準跟格式也就是es6的標準，就不用依賴在es6 module概念之前出來的擴充標準如commonJS AMD的寫法去達到module的功能，而可以利用原生的javascript去實現，但ES6 module還尚未被瀏覽器所支援，但未來一定會被支援的，而Rollup可以讓你馬上就使用原生的module寫法來開發。

#### Why use rollup
	Javascript 在ES6發佈前並沒有把modules納入javascript 的 core feature，也因此以前的javascript常常會有莫名其妙的問題，載入scripts的順序要注意，程式碼的污染也是常見的問題，在引入modules之後很多麻煩都可以被解決掉，但就是現階段往往得透過Node.js或者commonJS、AMD等其他取代module的寫法來解決，而在Rollup便可以直接使用ES6的寫法，透過rollup會compile成符合支援的格式(commonJS AMD IIFE-styl)，也就是你可以在現在就用未來的語法做開發，如此一來，未來瀏覽器支援後不必再重新修改程式碼囉囉。

#### Deep into Modules
	兩個現今主要的 module format
	CommonJS(server-side) - Node.js
	AMD - Browser 

#### 雜註記
	
	node_module is set up as commonJS，所以import並不能被識別，所以rollup 是猜測import的package為何，這不是一個很理想的結果，回頭看bundle後的檔案，沒有任何變動發生，反而假設這個package是從global也就是window傳過來的，，因此需要兩個plugin
	1. read node plugins from node modules directly
	2. transpile commonJS to ES6，讓rollup知道是什麼鬼


#### 參考連結
https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e
https://auth0.com/blog/javascript-module-systems-showdown/
https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0