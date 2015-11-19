import Rx, { Observable, Subject } from 'rx';

console.log('Observable.just');
let just42 = Observable.just(42);
console.log(just42);
let returnFromSubscribe = just42.subscribe(function (x) { console.log(x);});
console.log(returnFromSubscribe);

console.log('Subject.onNext');
var events = new Subject();
events.subscribe(function (x) { console.log('event:', x); });
events.onNext(1);
events.onNext(1);
events.onNext(1);

var count = 0;
events.subscribe((x) => { count += x;} );
console.log(count);
events.onNext(1);
events.onNext(1);
events.onNext(1);
console.log(count);

console.log('Observable.from');
Observable.from([1,2,3,4]).subscribe(function (x) { console.log(x); });

console.log('Create Observer');
let timer;
let src = Observable.create((o) => {
  for(let i = 0; i < 5; i++){
    o.onNext(10);
  }
  setTimeout(() => {
    o.onNext(10);
    o.onNext(5);
    o.onNext(-1);
    o.onNext(0);
    o.onNext(12);
    o.onNext(-8);
    o.onNext(7);
  }, 5000);

  return () =>  console.log('disposed');
});
let filter = src.filter((x) => x > 0);
src.subscribe(console.log);
console.log('hello');
filter.subscribe((x) => console.log('filtered: ', x));