function factorialLoop(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

const num = 5; 
const result = factorialLoop(num);
console.log(`The factorial of ${num} is: ${result}`);
