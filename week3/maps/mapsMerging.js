var arr = [['key1', 'value1'], ['key2', 'value2']];

var myMap = new Map(arr);

var second = new Map([
    [1, 'one'],
    [2, 'two']
  ]);

myMap.get('key1'); 
var merged = new Map([ ...second,...myMap ,[3, 'three']]);

console.log(Array.from(myMap)); 
console.log(Array.from(myMap.keys()));
console.log();
console.log(Array.from(merged)); 
console.log(Array.from(merged.keys()));