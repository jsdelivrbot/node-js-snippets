const EventEmitter = require('events').EventEmitter

class Person extends EventEmitter {
  constructor (name) {
    super()
    this.name = name
  }

  changeName (newName) {
    let oldName = this.name
    this.name = newName
    this.emit('name-change', oldName, newName)
  }
}

function l1 (oldName, newName) {
  console.log(`change ${oldName} to ${newName}`)
}

let p = new Person('Karlkim')
p.on('name-change', l1)
p.changeName('kk-sk')

// es5
function Es5Person (name) {
  EventEmitter.call(this)
  this.name = name
}

Es5Person.prototype = Object.create(EventEmitter.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Es5Person,
    writable: true
  }
})

Es5Person.prototype.changeName = function (newName) {
  let oldName = this.name
  this.name = newName
  this.emit('name-change', oldName, newName)
}

let p2 = new Es5Person('karlkim')
p2.on('name-change', (oldName, newName) => console.log(`${oldName} ==> ${newName}`))
p2.changeName('kk-sk')
