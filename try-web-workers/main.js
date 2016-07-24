console.log('main starting...');
var myWorker = new Worker("worker.js");

myWorker.onmessage = function(e) {
  console.log(e.data, ' received from worker');
}

setTimeout(function(){
  myWorker.postMessage([10, 11]);
  console.log('Message posted to worker');
}, 1000);