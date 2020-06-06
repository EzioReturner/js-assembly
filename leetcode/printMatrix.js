// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，
// 如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
// 则依次打印出数字1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.

//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
// 13 14 15 16

// 1 2 3
// 4 5 6
// 7 8 9

function printMatrix(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let arr = [];
  
  if (row === 0 || col === 0) {
    return arr;
  }

  let left = 0, right = col - 1,
    top = 0, bottom = row - 1;
  
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }

    for (let i = top+1; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }

    if (top !== bottom) { // 倒二情况
      for (let i = right-1; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
    }

    if (left !== right) { // 倒一情况
      for (let i = bottom - 1; i > top; i--) {
        arr.push(matrix[i][left]);
      }
    }
    left++, right--, top++, bottom--;
  }
  return arr;
}

// console.log(printMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// console.log(printMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(printMatrix([[1, 2, 3], [4, 5, 6], [7, 8 ,9], [10, 11, 12]]));
// console.log(printMatrix([[1, 2, 3, 4, 5]]));
// console.log(printMatrix([[1], [2], [3], [4], [5]]));
