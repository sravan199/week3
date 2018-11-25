var a=10;
function details(){
var newobj={
'firstName':'sravan',
'getName':function(){
return this.firstName;
 }
}
return newobj;
}
var obj1=details();
console.log( obj1.getName());
console.log( obj1.firstName);


function demo(){
    firstName='sravan';
    var newobj={
    'getName':function(){
    return firstName;
  }
}
return newobj;
}
var obj2=demo();
console.log( obj2.getName());



