// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

const a = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

function find(array, target) {
  if (array[0][0] > target) {
    return false;
  }
  const len = array.length;
  const childLen = array[0].length;
  for (let i = 0; i < len; i++) {
    const child = array[i];
    const last = child[childLen - 1];
    const first = child[0];
    if (first > target) {
      return false;
    }
    if (last === target) {
      return true;
    }
    if (last > target) {
      if (child.includes(target)) return true;
    }
    continue;
  }
  return false;
}

console.log(find(a, 7));

// 思路是这样的，首先判断 1行1列的值如果比目标值大，直接退出，
// 遍历判断每一行的第一列，如果大于目标值，说明目标值不在该列更不在后续列直接退出，
// 如果目标值小于最后一列的值说明可能位于该列，做一次includes 以此类推。

function Find(target, array) {
  // write code here
  lenX = array.length;
  lenY = array[0].length;
  for (var i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
    if (target > array[i][j]) {
      j++;
    } else if (target < array[i][j]) {
      i--;
    } else {
      return true;
    }
  }
  return false
}