// 斐波那契数列 现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。 n<=39

function Fibonacci(n) {
  if (n == 0) {
    return 0;
  } else {
    // let current = 1;
    // let prev = 0;
    let [current, prev] = [1, 0]
    for (let i = 2; i <= n; i++) {
      // current += prev;
      // prev = current - prev;
      [current, prev] = [current + prev, current];
    }
    return current;
  }
}

console.log(Fibonacci(6));
