// 防抖
export function debounce(fn, wait = 300) {
  let timeout = null;
  return function() {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

/**
 * 千分位
 * @param value 需处理的数据
 * 
 * */
export function scientificNotation(value) {
  if (typeof value === 'undefined' || value === null || isNaN(value)) {
    return value;
  }
  const stringValue = value.toString();
  const [integer, decimal] = stringValue.split('.');
  if (integer.length <= 3) {
    return stringValue;
  }
  let total = '';
  for (let i = integer.length - 1, j = 1; i > -1; i--, j++) {
    const num = j % 3 === 0 ? `,${integer[i]}` : integer[i];
    total = num + total;
  }
  total = total.replace(/^,/, '') + (decimal ? `.${decimal}` : '');
  return total;
}

/**
 * 四舍五入保留预订小数
 * @param value 需处理的数据
 * @param fixedLength 需要保留的小数位
 * 
 * */
export function halfAdjust(value, fixedLength = 2) {
  if (!value || !fixedLength) {
    throw Error('you should provide a num and fixed length');
  }
  const power = Math.pow(10, fixedLength);
  const powNum = value * power;
  const roundNum = Math.round(powNum);
  return roundNum / power;
}

/**
 * 生成指定进制和位数的随机数
 * @param system 进制 最大36 默认36进制
 * @param length 长度 最大11 默认返回11位
 * 
 * */ 
export function randomString(system = 36, length = 11) {
  const _system = Number(system);
  const _length = Number(length);
  if (!system || isNaN(_system)) {
    throw Error('randomString need a number type value')
  }
  if (_system > 36) {
    throw Error('system is no more than 36')
  }
  if (_length > 11) {
    throw Error('length is no more than 36')
  }
  const surplus = 11 - _length;
  return Math.random().toString(system).substr(2).slice(surplus);
}