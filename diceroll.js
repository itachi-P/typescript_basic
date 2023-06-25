// サイコロを振る関数
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// メインの処理
function main() {
    var args = process.argv.slice(2);
    if (args.length !== 1) {
        console.log('正しい引数を指定してください。');
        console.log('使用法: node script.js <回数>');
        process.exit(1);
    }
    var count = parseInt(args[0], 10);
    if (isNaN(count) || count <= 0) {
        console.log('回数には正の整数を指定してください。');
        process.exit(1);
    }
    console.log("".concat(count, "\u56DE\u30B5\u30A4\u30B3\u30ED\u3092\u632F\u3063\u305F\u7D50\u679C:"));
    var sum = 0;
    for (var i = 0; i < count; i++) {
        var result = rollDice();
        sum += result;
        console.log("\u6295\u3052\u305F\u56DE\u6570: ".concat(i + 1, ", \u51FA\u76EE: ").concat(result));
    }
    var average = sum / count;
    console.log("\u5408\u8A08\u5024: ".concat(sum, ", \u5E73\u5747\u5024: ").concat(average.toFixed(2)));
}
// メイン処理を実行
main();
