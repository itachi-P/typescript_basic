//色々なフォーマットで時間を表示するTypeScript

import * as readline from 'readline';

// 月の入力を求める関数
function promptMonth(): Promise<number> {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise<number>((resolve, reject) => {
		rl.question('月を入力してください: ', (answer) => {
			rl.close();
			const month = parseInt(answer, 10);
			if (isNaN(month) || month < 1 || month > 12) {
				reject(new Error('有効な月を入力してください。'));
			} else {
				resolve(month);
			}
		});
	});
}

// 月の最終日を取得する関数
function getLastDayOfMonth(month: number): number {
	const lastDate = new Date(new Date().getFullYear(), month, 0);
	return lastDate.getDate();
}

// メインの処理
async function main() {
	try {
		const month = await promptMonth();
		const lastDay = getLastDayOfMonth(month);
		console.log(`${month}月の最終日: ${lastDay}`);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}

// メイン処理を実行
main();

