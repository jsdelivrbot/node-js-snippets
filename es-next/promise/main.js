// ES5
var sleep = function(ms, cb){
  setTimeout(function(){ cb(); }, ms)
}

sleep(2000, function(){ console.log('wake up'); });

// ES2015 Promise
var sleepPromise = (ms) => {

  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve('result');
    }, ms)
  });;
};

sleepPromise(3000)
  .then((result) => {
    console.log(result);
    return 'result immediately';
  })
  .then((result) => {
        console.log(result);
        return sleepPromise(3000);
  })
  .then((result) => {console.log(result);});