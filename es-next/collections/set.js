let set = new Set([0, 0, 1, 2, 3, 4, x => x * x])
set.add(4)

for (const v of set) {
  console.log(v)
}
