function jumpFloorII(number) {
  if (number <= 1) return number;

  return 2 * jumpFloorII(number - 1);
}

console.log(jumpFloorII(6));

// 纯数学题， f(n) = f(n-1) + f(n-2) + ... + f(n-(n-1)) + f(n-n);
//          f(n) = f(0) + f(1) + ... + f(n-2) + f(n-1);
//          f(n-1) = f(0) + f(1) + ... + f(n-2);
//          f(n) - f(n-1) = f(n-1);
//          f(n) = 2 * f(n-1);