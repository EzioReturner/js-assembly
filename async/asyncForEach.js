const staticFuc = require('./static');

const {a, b, c, d} = staticFuc;

// Array.prototype.forEachAsync = async function(callback) {
//   for (let [index, item] of Object.entries(this)) {
//     await callback(item, index, this);
//   }
// };

// 原理是 _promiseAll 启动时所有的异步方法都开始执行，forEachAsync 中的for循环 
// await住每一次循环的异步操作，直到当前循环次数的异步操作完成后，进入下一轮，此时下一轮可能已经完成。


// 已下方代码为例，当第一轮await进行时，需要等待5s，而此时第二轮等待3s的异步操作已经执行完毕，则第二轮for循环直接完成，进入第三轮以此类推。

Object.defineProperty(Array.prototype, 'forEachAsync', {
  value: async function(callback) {
    for (let [index, item] of Object.entries(this)) {
      // tips:1
      await callback(item, index, this);
    }
  },
  enumerable: false,
  configurable: true,
  writable: true
})

async function _promiseAll(requestArr) {
  if (requestArr.length === 0) return;
  if (
    !requestArr.every(req => {
      return req instanceof Promise;
    })
  ) {
    return new Error('contain not instanceof Promise unit');
  }
  let results = [];

  await requestArr.forEachAsync(async req => {
    // tips:2 同tip:1 此处req在传入时就已经执行，此处await为了保证所有的请求都完成再返回
    const [data, error] = await req.then(res => [res, null]).catch(err => [null, err]);
    results.push([data, error]);
  });

  return results;
}


_promiseAll([a(), b(), c(), d()]).then(res=> {
  console.log(res);
})