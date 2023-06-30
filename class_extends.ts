//オブジェクト指向のクラスPersonを定義
//クラス名は大文字から始める

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    show(): string {
        return `名は${this.name}。${this.age}歳`;
    }
}

//クラスを使ってオブジェクトを生成
//クラス名の後ろに()をつけると、コンストラクタが呼び出される
let p = new Person("正男", 36);
console.log(p.show());

//クラスの継承
class BusinessPerson extends Person {
    work(): string {
        return `${this.name}はテキパキ働きます。`;
    }

    //継承元のメソッドをオーバーライド
    show(): string {
        return super.show() + "です。よろしくお願いします。";
    }
}

let bp = new BusinessPerson("理央", 30);
console.log(bp.show());
console.log(bp.work());

