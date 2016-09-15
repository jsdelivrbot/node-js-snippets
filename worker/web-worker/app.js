var worker = new Worker('./fibworker.js');
worker.onmessage = function (msg) {
  console.log(msg.data);
};
worker.postMessage(30);