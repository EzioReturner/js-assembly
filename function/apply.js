
Function.prototype._apply = function() {
  // 取出目标，和剩余入参
  const [tar, args] = arguments;

  // 指定上下文
  let context = tar || window;

  // 将方法挂载至下上文
  context.fn = this;

  // 执行
  let result = args ? context.fn(...args) : context.fn();

  // 删除引用
  delete context.fn;

  return result;
}

function test(age) {
  this.name = 'test';
  console.log(this.name + '/' + age);
}

test.prototype.say = function(age) {
  console.log(this.sex + '/' + age);
}

let tar = {
  name: 'tar',
  sex: 'male'
};

test._apply(tar, [18]);

let t1 = new test();

// apply 要生效前提是作用域内没有声明相应的对象
t1.say._apply(tar, [4]);