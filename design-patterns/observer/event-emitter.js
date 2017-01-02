const EventEmitter = require('events').EventEmitter
const ee = new EventEmitter()

function l1 () {
  console.log('l1')
}

function l2 () {
  console.log('l2')
}

ee.on('test', l1)
ee.once('test', l2)

ee.emit('test')
ee.emit('test')
ee.emit('test')

ee.removeListener('test', l1)
ee.emit('test')
