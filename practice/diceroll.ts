//ローカルのNode.jsを使う前提。ブラウザ上では動かない

// サイコロを振る関数
function rollDice(): number {
	return Math.floor(Math.random() * 6) + 1;
}

function main() {
	//processはNode.jsのグローバル変数
	const args = process.argv.slice(2);
	if (args.length !== 1) {
		console.log('正しい引数を指定してください。');
		console.log('使用法: node diceroll.js <回数>');
		process.exit(1);
	}

	// 入力された値を数値に変換(これだと最初の文字が数字ならなんでも通る)
	//const count= parseInt(args[0], 10);

	// 入力された値がnumber型かどうかを判定(型安全)
	//ただし、Number型に変換しているので、キャスト可能な文字列の数字は変換される
	const count = Number(args[0]);

	if (isNaN(count) || count <= 0) {
		console.log('回数には正の整数を指定してください。');
		process.exit(1);
	}

	console.log(`${count}回サイコロを振った結果:`);
	let sum = 0;
	for (let i = 0; i < count; i++) {
		const result = rollDice();
		sum += result;
		console.log(`投げた回数: ${i + 1}, 出目: ${result}`);
	}

	const average = sum / count;
	console.log(`合計値: ${sum}, 平均値: ${average.toFixed(2)}`);
}

// メイン処理を実行
main();

