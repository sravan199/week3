var delay=1000;
var a=1;
var interval=setInterval(function(){
     console.log(a+"seconds passed");
     a++;
},1000);

var timour=setTimeout(function(){
    clearInterval(interval);
     console.log('10 seconds passed ');
},10000);