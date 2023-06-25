// My first TypeScript program
// TypeScriptのコンパイルはtscコマンドで行う

// function greeter(person: string) {
// 	return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.innerHTML = greeter(user);

function hello(name: string): void {
	console.log("Hello " + name + "!");
}

let your_name: string = "itachi-P";
hello(your_name);

let v_bool: boolean = true;
let v_num: number = 123;
let v_str: string = "ABCDEFG";
let v_null: null = null;
let v_undef: undefined = undefined;

let v_arr1: string[] = ["Red", "Green", "Blue"];
let v_arr2: Array<string> = ["Red", "Green", "Blue"];
//タプルは型の異なる複数の要素を含むことができる配列
let v_tuple: [string, number] = ["Yamada", 26];

//オブジェクト
let v_obj: object = { "name": "Yamada", "age": 26 };
//クラス
class MyClass { name: string; }
var val_class: MyClass = new MyClass();

//Enumは型名を指定する列挙型
enum Color { Red, Green, Blue };
let v_enm: Color = Color.Green;

//anyは任意の型を許容する
let v_any: any = 4;

//文字列か数値のどちらかの型を許容する場合
function func(arg: string | number) { }

/* nullとundefinedは全ての型の変数に代入できる。
ただし、コンパイル時に--strictNullChecksオプションを指定すると
厳密なチェックが行われ、それぞれnull型とundefined型のみ許容される。*/
let v_num2: null = null
let v_str2: undefined = undefined

//voidは値を返さない関数の戻り値の型として使う
function log(msg: string): void {
	console.log(msg);
}

//neverはreturnさえ行われず、決して発生しない値の型
//例外を投げる関数や無限ループを行う関数の戻り値の型として使う
//never型はvoid型を含む他のどの型とも互換性があるため、どの型にも代入できる
function error(msg: string): never {
	throw new Error(msg);
}

function infiniteLoop(): never {
	while (true) {
	}
}

//インターフェースは型の一種で、オブジェクトの構造を定義する
//クラスと同様に継承することができる
interface Person {
	name: string;
	age: number;
}
let person1: Person = { name: "Yamada", age: 26 };

/* 型アサーションは型が不明な変数に対し、型を明示的に指定すること
値の前に <型名> を記述する方法と、値の後ろに as 型名 を記述する方法があるが、
前者はReactで使用されるJSXの場合にタグとの区別がつかない為、後者の書き方が推奨 */
interface Person {
	name: string;
	age: number;
}
let foo = <Person>{}
foo.name = "Yamada";    // 型アサーションが無いとエラーになる
let bar = {} as Person
bar.name = "Yamada";    // 型アサーションが無いとエラーになる

//型エイリアス: typeで既存の型に別名をつけることができる
type bool = boolean
let flag: bool = true;
