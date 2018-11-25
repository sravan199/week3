function student(firstName,lastName,id){
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=id
}
student.prototype.percentage=function(maths,science){
    return ((maths+science)/200)*100;
}
var std1=new student('sravan','guduru',417);

function isFail(){
console.log("35% is minimum pass-percentage");
}
var passOrFail =new isFail();

passOrFail.__proto__.__proto__=student.prototype;

passOrFail.check=function (maths,science){
    if(passOrFail.percentage(maths,science)>=35)console.log("Passed");
    else console.log("Failed");
}
console.log(std1.firstName+" "+std1.lastName+ " is " );
passOrFail.check(4,10);