function transferByLine(line, transferable) {
  var arr = [];
  var bufferArr = [];
  for (var i = 0; i < line; i++) {
    arr[i] = new Uint8Array(100);
    if (transferable) {
      bufferArr.push(arr[i].buffer);
    }
  }
  console.log(
    'Successfully created the array. The array has ' + line + ' items, each item size is 100 bytes'
  );
  console.log('Start transferring...');
  var startTime = new Date().getTime();
  if (!transferable) {
    this.postMessage(arr);
  } else {
    this.postMessage(arr, bufferArr);
  }
  var timeTaken = new Date().getTime() - startTime;
  console.log('Tranfer completed in ' + timeTaken + 'ms.');
  this.postMessage({ type: 'time', data: timeTaken });
}

this.addEventListener(
  'message',
  function(e) {
    console.log(e);
    transferByLine(5000, true)
  },
  false
);
