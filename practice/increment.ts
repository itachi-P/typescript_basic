//引数にnumber型を指定(型注釈)
//文字列を渡すとコンパイルエラーになる
function increment(num: number) {
	return num + 1;
}

//素のJavaScriptでは型強制により引数に"999"を渡すと"9991"という結果になってしまう
//TypeScriptでは文字列である"999"を渡そうとした時点でエラーになる
console.log(increment(999));

//なお、毎回TSCコマンドでコンパイルするのは面倒なので、
//ts-nodeというパッケージを使うと、コンパイルと実行を同時に行ってくれる。
//$ npm install -g ts-node
//$ npx ts-node increment.ts
