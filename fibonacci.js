function fibonacciWithLoop(n) {
  const series = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextValue = series[i - 1] + series[i - 2];
    series.push(nextValue);
  }

  return series;
}

const num = 10; 
const result = fibonacciWithLoop(num);
console.log(`Fibonacci series (${num} numbers): ${result.join(", ")}`);
