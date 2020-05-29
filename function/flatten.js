function flatten(arr) {
  var res = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function flatten(arr) {
  return arr.reduce(function(prev,item) {
      return prev.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}