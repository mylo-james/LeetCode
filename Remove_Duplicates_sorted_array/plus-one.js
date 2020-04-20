function plusOne(digits) {
  let i = digits.length - 1;
  digits[i] = digits[i] + 1;
  while (digits[i] === 10 && i !== 0) {
    digits[i] = 0;
    digits[i - 1] += 1;
    i--;
  }
  if (digits[0] === 10) {
    digits.splice(0, 1, 1, 0);
  }
  return digits;
}
