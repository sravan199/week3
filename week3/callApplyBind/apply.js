function sum (a,b){
    console.log(a+b+arguments[2],this.c);
    }
    
    var obj={
     'c':10,
     'newfun':function(fun){
        var a=[],i=0;
        for(ele in arguments)
        {
           if(typeof (arguments[ele])!== "function" ){
           a[i]=arguments[ele];i++ ;
              }
           }
                // var a=[];
                // a[0]=arguments[1];
                // a[1]=arguments[2];
                // a[2]=arguments[3];
       
          fun.apply(obj,a);
       }
    }

    sum.apply(obj,[1,2,3]);
   obj.newfun(sum,2,10,45);