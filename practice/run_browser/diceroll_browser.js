// サイコロを振る関数
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// メインの処理
function main() {
    var countInput = document.getElementById('countInput');
    var resultElement = document.getElementById('result');
    if (!countInput || !resultElement) {
        console.error('要素が見つかりません。');
        return;
    }
    var count = parseInt(countInput.value, 10);
    if (isNaN(count) || count <= 0) {
        resultElement.textContent = '回数には正の整数を指定してください。';
        return;
    }
    var results = [];
    var sum = 0;
    for (var i = 0; i < count; i++) {
        var result = rollDice();
        results.push("\u6295\u3052\u305F\u56DE\u6570: ".concat(i + 1, ", \u51FA\u76EE: ").concat(result));
        sum += result;
    }
    var average = sum / count;
    results.push("\u5408\u8A08\u5024: ".concat(sum, ", \u5E73\u5747\u5024: ").concat(average.toFixed(2)));
    resultElement.innerHTML = results.join('<br>');
}
