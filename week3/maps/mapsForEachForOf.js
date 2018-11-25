var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

for (var key of myMap.keys()) {
  console.log(key);
}

for (var value of myMap.values()) {
  console.log(value);
}

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}

myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
  });