// サイコロを振る関数
function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// メインの処理
function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log('正しい引数を指定してください。');
    console.log('使用法: node script.js <回数>');
    process.exit(1);
  }

  const count = parseInt(args[0], 10);
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

