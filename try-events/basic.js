var emitter = function () {
  var subscribers = {};

  var on = function (eventName, cb) {
    subscribers[eventName] = subscribers[eventName] || [];
    subscribers[eventName].push(cb);
  };

  var emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var eventSubscribers = subscribers[eventName];
    if (eventSubscribers) {
      for (var i = 0; i < eventSubscribers.length; i++) {
        var cb = eventSubscribers[i];
        cb.apply(null, args);
      }
    }
  }

  var getSubscribersCount = function (eventName) {
    return subscribers[eventName]?subscribers[eventName].length:0;
  }

  return {
    on: on,
    emit: emit,
    getSubscribersCount: getSubscribersCount
  }
}

var ee = emitter();
console.log(ee.getSubscribersCount('test'));
ee.on('test', function(a, b, c){ console.log('1:', a,b,c);});
ee.on('test', function(a, b){ console.log('2:', a,b);});
console.log(ee.getSubscribersCount('test'));
ee.emit('test', 1, 2, 3);
