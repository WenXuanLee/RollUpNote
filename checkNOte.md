
### Slides 
	整理簡報所講之內容

### Introduction
#### What is rollup
	什麼是Rollup，Webpack競爭對手，module bundler for Javascript，將片段的程式碼組合成一支完整的Code，舉例來說，拼圖的每一塊小碎片都是一個module，我們在玩拼圖的角色就像是module bundler一樣，將拼圖組成一幅完整的作品，Rollup bundler主要是依據最新modules的標準跟格式也就是es6的標準，就不用依賴在es6 module概念之前出來的擴充標準如commonJS AMD的寫法去達到module的功能，而可以利用原生的javascript去實現，但ES6 module還尚未被瀏覽器所支援，但未來一定會被支援的，而Rollup可以讓你馬上就使用原生的module寫法來開發。

#### Why use rollup
	Javascript 在ES6發佈前並沒有把modules納入javascript 的 core feature，也因此以前的javascript常常會有莫名其妙的問題，載入scripts的順序要注意，程式碼的污染也是常見的問題，在引入modules之後很多麻煩都可以被解決掉，但就是現階段往往得透過Node.js或者commonJS、AMD等其他取代module的寫法來解決，而在Rollup便可以直接使用ES6的寫法，透過rollup會compile成符合支援的格式(commonJS AMD IIFE-styl)，也就是你可以在現在就用未來的語法做開發，如此一來，未來瀏覽器支援後不必再重新修改程式碼囉囉。

#### Deep into Modules
	兩個現今主要的 module format
	CommonJS(server-side) - Node.js(主要影響並非完全相同)
	AMD - Browser
	今天主要稍微講一下node 處理 module的過程，
	在Node環境下，我們透過 require & exports來傳遞modules，在Node環境下，每一個獨立的file都是被當成一個modules，而require是內建的函式用於從別的moduleimport symbols到當下的scope，

	Common JS 在server-side的實現為node，但node不全然是commonjs module的樣子，基本共同點為module system都為require & exports，差異在於module.exports，commonJS並沒有module.exports object，這也讓node環境下是不能直接export expression，而要塞入module.exports這個特殊的物件裡面。

	commonJS的設計主要是為了server-side的，

PROS
* Simple: a developer can grasp the concept without looking at the docs.
* Dependency management is integrated: modules require other modules and get loaded in the needed order.
* require can be called anywhere: modules can be loaded programmatically.
* Circular dependencies are supported.
CONS
* Synchronous API makes it not suitable for certain uses (client-side).
* One file per module.
* Browsers require a loader library or transpiling.
* No constructor function for modules (Node supports this though).
* Hard to analyze for static code analyzers.


#### 雜註記
	
	node_module is set up as commonJS，所以import並不能被識別，所以rollup 是猜測import的package為何，這不是一個很理想的結果，回頭看bundle後的檔案，沒有任何變動發生，反而假設這個package是從global也就是window傳過來的，，因此需要兩個plugin
	1. read node plugins from node modules directly
	2. transpile commonJS to ES6，讓rollup知道是什麼鬼


#### 參考連結
https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e
https://auth0.com/blog/javascript-module-systems-showdown/
https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0
https://stackoverflow.com/questions/43219030/what-is-flat-bundling-and-why-is-rollup-better-at-this-than-webpack/43255948
https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c