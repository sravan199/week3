var a=11;
function outer(){
   var b=100;
   var increment =function(){
       b++;
       console.log("b value due to increment function "+b);
   };
   var inner=function(){
       a++;
       b++;
    console.log(a);
    console.log(b);
    increment();
   };
   return inner;
}
var innerFun1 =outer();
innerFun1();


var innerFun2 =outer();
innerFun2();















