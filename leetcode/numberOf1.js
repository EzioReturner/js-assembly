// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n) {
  var count = 0, flag = 1;
  while(flag){
    if (n & flag) count++;
    flag = flag << 1;
  }
  return count;
}

console.log(NumberOf1(5));

// 思路：用flag = 1 这个数， 二进制为 00000001，与传入的n的二进制数字做与 &运算
// 并且 flag自身不断左移一位 其实就是对 n 的每一位做与 & 。
// 如果当前 n 的当前位为 1 则与出来就是 1， count++，反之如果为 0 则整个数字为0。 