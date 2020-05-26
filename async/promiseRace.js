const staticFuc = require('./static');

const { a, b, c, d } = staticFuc;

function _race(promiseArr) {
  if (
    !promiseArr.every(promise => {
      return promise instanceof Promise;
    })
  ) {
    return new Error('contain not instanceof Promise unit');
  }
  return new Promise((resovle, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      const promise = promiseArr[i];
      promise.then(resovle, reject)
    }
  }) 
}

_race([a(), b(), c(), d()]).then(res => {
  console.log('champion: ' + res);
});