function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);

    setTimeout(()=>{
        console.log('in second timeout');
    },200);

    console.log('after calling resolveAfter2Seconds');
  }
 
 asyncCall();
 test();
 function test(){
    console.log('in function test');
 }

