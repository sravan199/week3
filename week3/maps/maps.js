//The map() method creates a new array with the results of calling a provided 
//function on every element in the calling array.

var  arr=[1,2,5,4];
var number=arr.map((num,key)=>{
    return num*2;
});
console.log(number);