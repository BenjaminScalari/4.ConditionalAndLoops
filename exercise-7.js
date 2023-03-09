function sumUntil(maxValue) {
  let sum = 0;
  for (let x = 1; x <= maxValue; x++) {
    sum += x;
}
  return sum;
}

console.log(sumUntil(5));