// 运行 node funciont/new.js  执行

function create() {
  // 新建一个空的对象
  let obj = new Object();
  
  // 切割fuc和args
  let [con, ...restArgs] = [...arguments];

  // 挂载原型
  obj.__proto__ = con.prototype;
  
  // 将function的this绑定到新建的空对象
  let back = con.apply(obj, restArgs);

  return typeof back === 'object' ? back : obj;
}

function test() {
  this.name = 'test';
}

test.prototype.sayName = function() {
  console.log(this.name);
}

let t1 = create(test);

t1.sayName();