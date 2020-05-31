// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 保证base和exponent不同时为0

function Power(base, exponent) {
  if (base == 0 & exponent == 0) return null;
  if (exponent == 0) return 1;

  let _exponent = Math.abs(exponent);
  
  let num = base;
  for (let j = 1; j < _exponent; j++) {
    num *= base;
  }

  if (exponent < 0) {
    return 1 / num;
  }

  return num;
}

console.log(Power(-2, 3));

console.log(Power(2, 3));

console.log(Power(2, -3));

console.log(Power(0.2, 3));
console.log(Power(1.2, 3));
