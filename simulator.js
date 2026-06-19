/**
 * ニュートン法を用いた平方根シミュレーター
 * @param {number} target - 平方根を求めたい数値
 */
function simulateSquareRoot(target) {
    if (target < 0) {
      console.log("エラー: 負の数の平方根は実数の範囲では存在しません。");
      return;
    }
    if (target === 0) {
      console.log("0 の平方根は 0 です。");
      return;
    }
  
    console.log(`=========================================`);
    console.log(`  ${target} の平方根シミュレーションを開始`);
    console.log(`=========================================`);
  
    // 初期予測値（対象の数の半分からスタート）
    let x = target / 2; 
    let iteration = 0;
    const tolerance = 1e-15; // 許容誤差（どこまで正確に計算するか）
    let previousX;
  
    console.log(`初期予測値: ${x}\n`);
  
    do {
      iteration++;
      previousX = x;
      
      // ニュートン法の漸化式: x = (x + target / x) / 2
      x = (x + target / x) / 2;
  
      console.log(`[ステップ ${iteration}]`);
      console.log(`  現在の予測値: ${x}`);
      console.log(`  前回の差分  : ${Math.abs(x - previousX).toExponential()}`);
      console.log(`  -----------------------------------`);
  
    } while (Math.abs(x - previousX) > tolerance && iteration < 100);
  
    console.log(`\n【シミュレーション結果】`);
    console.log(`計算回数      : ${iteration} 回`);
    console.log(`近似計算値    : ${x}`);
    console.log(`Math.sqrt値   : ${Math.sqrt(target)}（JavaScript標準）`);
    console.log(`二乗した結果  : ${x * x} (元の数: ${target})`);
  }
  
  // 実行（例: 2の平方根、1234の平方根）
  simulateSquareRoot(2);
  // simulateSquareRoot(1234);
