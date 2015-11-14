'use strict';

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Observable.just');
var just42 = _rx.Observable.just(42);
console.log(just42);
var returnFromSubscribe = just42.subscribe(function (x) {
  console.log(x);
});
console.log(returnFromSubscribe);

console.log('Subject.onNext');
var events = new _rx.Subject();
events.subscribe(function (x) {
  console.log('event:', x);
});
events.onNext(1);
events.onNext(1);
events.onNext(1);

var count = 0;
events.subscribe(function (x) {
  count += x;
});
console.log(count);
events.onNext(1);
events.onNext(1);
events.onNext(1);
console.log(count);

console.log('Observable.from');
_rx.Observable.from([1, 2, 3, 4]).subscribe(function (x) {
  console.log(x);
});

console.log('Create Observer');
var timer = undefined;
var src = _rx.Observable.create(function (o) {
  for (var i = 0; i < 5; i++) {
    o.onNext(10);
  }
  setTimeout(function () {
    o.onNext(10);
    o.onNext(5);
    o.onNext(-1);
    o.onNext(0);
    o.onNext(12);
    o.onNext(-8);
    o.onNext(7);
  }, 5000);

  return function () {
    return console.log('disposed');
  };
});
var filter = src.filter(function (x) {
  return x > 0;
});
src.subscribe(console.log);
console.log('hello');
filter.subscribe(function (x) {
  return console.log('filtered: ', x);
});
//# sourceMappingURL=basic.js.map
