//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//Array.prototype.filter()

var arr = [10,25,33,45,666,715,-8,9];
var filterArray = arr.filter(num => num < 50);
console.log(filterArray);


//reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving 
//four arguments:

// accumulator
// currentValue
// currentIndex
// array

// //The first time the callback is called, accumulator and currentValue can be one of two values. 
// If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue,
//  and currentValue will be equal to the first value in the array. If no initialValue is provided, 
//  then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
//Array.prototype.reduce()


var sum = [0, 91, 2, 30].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
    console.log('reduce method o/p is '+sum);