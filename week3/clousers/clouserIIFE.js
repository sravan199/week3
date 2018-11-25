
var i;
for(i=0;i<10;i++){
    currentValue=i;
(function(){
        setTimeout(function(){
        console.log(currentValue +" 1st ");
        },1000);
})();
}


var a;
for(a=0;a<10;a++){
(function(currentValue){
    
    setTimeout(function(){
    console.log(currentValue +" 2nd ");
    },1000);
 })(a);
}