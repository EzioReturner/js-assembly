// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

function minNumberInRotateArray(rotateArray) {
    // write code here
  if (rotateArray.length === 0) return 0;

  let left = 0;
  let right = rotateArray.length - 1;
  let mid;
  
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (rotateArray[left] < rotateArray[mid]) {
      left = mid;
    } else {
      if (rotateArray[left] == rotateArray[mid]) {
        return rotateArray[right];
      } else {
        right = mid;
      }
    }
  }
}

var a = [6501, 6828, 6963, 7036, 7422, 7674, 154, 293, 334, 492, 555];
console.log(minNumberInRotateArray(a));

// 思路就是左右缩进夹逼找到最小值。因为mid取值为floor 所以最后 left 会比 right 小1，返回right就是目标值
