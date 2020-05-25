function create() {
  // 新建一个空的对象
  let obj = new Object();
  // 拿到需要new 的function
  
  let con = Array.prototype.shift.call(arguments);

  // 挂载原型
  obj.__proto__ = con.prototype;
  
  // 将function的this绑定到新建的空对象
  let back = con.apply(obj, arguments);

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