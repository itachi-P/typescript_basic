// サイコロを振る関数
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// メインの処理
function main() {
    const countInput = document.getElementById('countInput') as HTMLInputElement;
    const resultElement = document.getElementById('result') as HTMLDivElement;

    if (!countInput || !resultElement) {
        console.error('要素が見つかりません。');
        return;
    }

    const count: number = parseInt(countInput.value, 10);
    if (isNaN(count) || count <= 0) {
        resultElement.textContent = '回数には正の整数を指定してください。';
        return;
    }

    const results: string[] = [];
    let sum = 0;
    for (let i = 0; i < count; i++) {
        const result: number = rollDice();
        results.push(`投げた回数: ${i + 1}, 出目: ${result}`);
        sum += result;
    }

    const average: number = sum / count;
    results.push(`合計値: ${sum}, 平均値: ${average.toFixed(2)}`);

    resultElement.innerHTML = results.join('<br>');
}
