// My first TypeScript program
// TypeScriptのコンパイルはtscコマンドで行う
// function greeter(person: string) {
// 	return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.innerHTML = greeter(user);
function hello(name) {
    console.log("Hello " + name + "!");
}
var your_name = "itachi-P";
hello(your_name);
var v_bool = true;
var v_num = 123;
var v_str = "ABCDEFG";
var v_null = null;
var v_undef = undefined;
var v_arr1 = ["Red", "Green", "Blue"];
var v_arr2 = ["Red", "Green", "Blue"];
//タプルは型の異なる複数の要素を含むことができる配列
var v_tuple = ["Yamada", 26];
//オブジェクト
var v_obj = { "name": "Yamada", "age": 26 };
//クラス
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var val_class = new MyClass();
//Enumは型名を指定する列挙型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var v_enm = Color.Green;
//anyは任意の型を許容する
var v_any = 4;
//文字列か数値のどちらかの型を許容する場合
function func(arg) { }
/* nullとundefinedは全ての型の変数に代入できる。
ただし、コンパイル時に--strictNullChecksオプションを指定すると
厳密なチェックが行われ、それぞれnull型とundefined型のみ許容される。*/
var v_num2 = null;
var v_str2 = undefined;
//voidは値を返さない関数の戻り値の型として使う
function log(msg) {
    console.log(msg);
}
//neverはreturnさえ行われず、決して発生しない値の型
//例外を投げる関数や無限ループを行う関数の戻り値の型として使う
//never型はvoid型を含む他のどの型とも互換性があるため、どの型にも代入できる
function error(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) {
    }
}
var person1 = { name: "Yamada", age: 26 };
var foo = {};
foo.name = "Yamada"; // 型アサーションが無いとエラーになる
var bar = {};
bar.name = "Yamada"; // 型アサーションが無いとエラーになる
var flag = true;
