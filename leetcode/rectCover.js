// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 比如n=3时，2*3的矩形块有3种覆盖方法：

function rectCover(number) {
  if (number < 3) return number;
  let [cur, pre] = [2, 1];
  for(let i = 3; i<= number; i++) {
    [cur, pre] = [cur + pre, cur];
  }
  return cur;
}

console.log(rectCover(4))

// 又斐波那契就是了