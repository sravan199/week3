//The bind() method creates a new function that, when called, has its this keyword set to the provided value

function sum (a,b){
    console.log(a+b,this.c);
}
    
    var obj={
     'c':10
    }
var bindFun=sum.bind(obj,1,2);
bindFun();


















