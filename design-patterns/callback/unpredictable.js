
const cache1 = {}
function badCheck (x, cb) {
  console.log('badcheck: ' + x, cache1)
  if (cache1.hasOwnProperty(x)) {
    cb(true)
  } else {
    cache1[x] = true
    process.nextTick(cb, false)
  }
}

const cache2 = {}
function goodCheck (x, cb) {
  console.log('goodCheck: ' + x, cache2)
  if (cache2.hasOwnProperty(x)) {
    process.nextTick(cb, true)
  } else {
    cache2[x] = true
    process.nextTick(cb, false)
  }
}

let arr = [1, 5, 10, 1, 2, 1, 5]

let i = 0
arr.forEach(v => {
  setTimeout(() => {
    badCheck(v.toString(), (check) => console.log(v, check))
    console.log('waiting...')
  }, i++ * 10)
})

arr.forEach(v => {
  setTimeout(() => {
    goodCheck(v.toString(), (check) => console.log(v, check))
    console.log('waiting...')
  }, i++ * 10)
})
