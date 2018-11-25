function details (job){
console.log(this.firstName+' ' +this.lastName+'  is a  '+ job);
}
var fullDetails={
 'firstName':'sravan',
'lastName':'Guduru',
 'newFun':function(fun){
   fun('student');
 }

}
// fullDetails.newFun(details);
details.call(fullDetails,'student');


  