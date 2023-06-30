//オブジェクト指向のクラスPersonを定義
//クラス名は大文字から始める
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        return "\u540D\u306F".concat(this.name, "\u3002").concat(this.age, "\u6B73");
    };
    return Person;
}());
//クラスを使ってオブジェクトを生成
//クラス名の後ろに()をつけると、コンストラクタが呼び出される
var p = new Person("正男", 36);
console.log(p.show());
//クラスの継承
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessPerson.prototype.work = function () {
        return "".concat(this.name, "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059\u3002");
    };
    //継承元のメソッドをオーバーライド
    BusinessPerson.prototype.show = function () {
        return _super.prototype.show.call(this) + "です。よろしくお願いします。";
    };
    return BusinessPerson;
}(Person));
var bp = new BusinessPerson("理央", 30);
console.log(bp.show());
console.log(bp.work());
