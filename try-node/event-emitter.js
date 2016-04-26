var EventEmitter = require('events').EventEmitter;

var Counter = function (init) {
  this.increment = function () {
    init++;
    this.emit('incremented', init);
  }
}

// Counter can emit event
Counter.prototype = new EventEmitter();

var counter = new Counter(10);

// counter listener
counter.addListener('incremented', (count) => console.log(count));
counter.on('incremented', (count) => console.log(count)); // on === addListener

counter.increment();
counter.increment();

var Readable = require('stream').Readable;
var readable = new Readable;
var count = 0;
readable._read = function () {
  if (++count > 10) {
    return readable.push(null);
  }
  setTimeout(function () {
    readable.push(count + "\n");
  }, 500);
};

var fs = require('fs');
var writeStream = fs.createWriteStream("./counter", {
  flags: 'w',
  mode:'0666'
});

readable.pipe(process.stdout); // pipe to stdout
readable.pipe(writeStream); // pipe to file
