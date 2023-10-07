function isArmstrongNumber(number) {
  const numString = number.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numString[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

const num = 153; 
if (isArmstrongNumber(num)) {
  console.log(`${num} is an Armstrong number.`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}
