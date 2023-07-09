//引数にnumber型を指定(型注釈)文字列を渡すとコンパイルエラーになる
function increment(num: number) {
	return num + 1;
}

//JavaScriptでは型強制により引数に"999"を渡すことで"9991"という結果になる
console.log(increment(999));