
function uniq1(arr) {
  let hashArr = [];
  let array = arr;

  function findHash(element) {
    let result = false;
    for (let j = 0; j < hashArr.length; j++) {
      const hash = hashArr[j];
      if (element === hash) {
        return true;
      }
    }
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const exist = findHash(element);
    !exist && hashArr.push(element);
  }
  return hashArr;
}

// console.log(uniq1(arr));

function uniq2(array){ 
  let r = []; 
  for (let i = 0; i < array.length; i++) { 
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        // j，i重置
        j = ++i;
      };
    }
    r.push(array[i]); 
  } 
  return r; 
}

const arr = [1, 'a', 8, '23333', 8,  99, 'a'];
console.log(uniq2(arr));
