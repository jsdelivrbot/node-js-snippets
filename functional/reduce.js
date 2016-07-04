var records = [
  { name: 'a', value: 1 },
  { name: 'a', value: 2 },
  { name: 'b', value: 4 },
  { name: 'b', value: 5 },
  { name: 'c', value: 1 }
];

var groups = records.reduce(function(acc, record){
  acc[record.name] = acc[record.name] || [];
  acc[record.name].push(record.value);
  return acc;

}, {})

console.log(groups);