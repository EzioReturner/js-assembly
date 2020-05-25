Array.prototype.forEachAsync = async function(callback) {
  for (let [index, item] of Object.entries(this)) {
    await callback(item, index, this);
  }
};

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

  // @ts-ignore
  await requestArr.forEachAsync(async (req) => {
    const [data, error] = await req.then(res => [res, null]).catch(err => [null, err]);
    results.push([data, error]);
  });

  return results;
}

function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('a: 3000ms');
      resolve('a resolve');
    }, 3000);
  });
}
function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('b: 2000ms');
      resolve('b resolve');
    }, 2000);
  });
}
function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('c: 5000ms');
      resolve('c resolve');
    }, 5000);
  });
}
function d() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('d: 8000ms');
      resolve('d resolve');
    }, 8000);
  });
}

_promiseAll([a(), b(), c(), d()]).then(res=> {
  console.log(res);
})