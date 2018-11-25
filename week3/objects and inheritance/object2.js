
function stdentDetails(firstName,lastName,college,id){
var myobj={};
    myobj.firstName=firstName;
    myobj.lastName=lastName;
    myobj.college=college;
    myobj.id=id;
    return myobj;
}

var student1=stdentDetails('sravan','guduru','gitam',417);

var student2=stdentDetails('rahul  ','lagishetty','gitam',330);
console.log(student1,student2);