const staticFuc = require('./static');

const { a, b, c, d } = staticFuc;

function _all(promiseArr) {
  if (
    !promiseArr.every(promise => {
      return promise instanceof Promise;
    })
  ) {
    return new Error('contain not instanceof Promise unit');
  }
  return new Promise((resolve, reject) => {
    let resolveArr = [];
    function pushResolveArr(_resolve) {
      resolveArr.push(_resolve);
      if (resolveArr.length === promiseArr.length) {
        resolve(resolveArr);
      }
    }
    for (let i = 0; i < promiseArr.length; i++) {
      const promise = promiseArr[i];
      promise.then(pushResolveArr, reject)
    }
  })
}

_all([a(), b(), c(), d()]).then(res => {
  console.log(res);
});