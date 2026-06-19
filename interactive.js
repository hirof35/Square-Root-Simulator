const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Node.js 平方根シミュレーター ---");

function askQuestion() {
  rl.question('平方根を求めたい数値を入力してください (qで終了): ', (answer) => {
    if (answer.toLowerCase() === 'q') {
      console.log("シミュレーターを終了します。");
      rl.close();
      return;
    }

    const num = Number(answer);

    if (isNaN(num)) {
      console.log("有効な数値を入力してください。\n");
    } else if (num < 0) {
      console.log("負の数の平方根は（実数では）計算できません。\n");
    } else {
      const result = Math.sqrt(num);
      console.log(`√${num} = ${result}`);
      console.log(`確認 (${result} * ${result} = ${result * result})\n`);
    }

    // 繰り返し質問する
    askQuestion();
  });
}

askQuestion();
