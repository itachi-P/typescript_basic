//TypeScriptでclassを使うサンプル

class SampleClass {
	// プロパティ
	// 名前はpublicにして外部からのアクセスを許可
	public name: string;
	//年齢はprivateにして外部からのアクセスを禁止
	private age: number;

	// コンストラクタ
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	// プロパティの参照メソッド(nameはpublicなので直接のアクセスも可能)
	public show(): void {
		console.log(this.name + "さんは" + this.age + "歳です。");
	}
	//setter(外部からアクセスできない年齢を変更するメソッド)
	public setAge(age: number): void {
		this.age = age;
	}
}

// インスタンスの生成
let person1 = new SampleClass("山田", 30);
// メソッドの呼び出し
person1.show();

// publicプロパティは直接参照も変更も可能
console.log(person1.name);
person1.name = "田中";
// 年齢はprivateなので直接は変更できない
person1.setAge(26);
person1.show();