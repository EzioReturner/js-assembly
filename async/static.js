function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('a: 5000ms');
      resolve('a resolve');
    }, 5000);
  });
}
function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('b: 3000ms');
      resolve('b resolve');
    }, 3000);
  });
}
function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('c: 8000ms');
      resolve('c resolve');
    }, 8000);
  });
}
function d() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('d: 1000ms');
      resolve('d resolve');
    }, 1000);
  });
}

module.exports = {
  a ,b ,c, d
}