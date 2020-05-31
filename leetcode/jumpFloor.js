function jumpFloor(number) {
  if(number<2) return 1;
  let [cur, pre] = [1,1];
  for(let i = 2; i<= number; i++) {
    [cur, pre] = [cur + pre, cur];
  }
  return cur;
}

jumpFloor(3);

// 跳一次剩下的台阶为n-1，设方法为f(n-1);  则跳两次 f(n-2)
// 则总值为 f(n) = f(n-1) + f(n-2)
// 令人窒息的斐波那契数列