console.log('main');

var Worker = require("worker?inline!./fibworker.js");
var worker = new Worker();

console.log(worker);
worker.onmessage = function (msg) {
  console.log(msg.data);
};
worker.postMessage(30);

console.log('main done');