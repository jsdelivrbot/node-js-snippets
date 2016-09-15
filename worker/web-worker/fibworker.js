self.onmessage = function (msg) {
  console.log('fibo('+msg.data+')');
  self.postMessage(fibo(msg.data));
};

function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}