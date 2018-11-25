
function stdentDetails(firstName,lastName,college,id,marks){
    this.firstName=firstName;
    this.lastName=lastName;
    this.college=college;
    this.id=id;
    this.marks=marks;
    this.recorrection=function(){
            this.marks+=5;
        }
    }
    
    var student1=new stdentDetails('sravan','guduru','gitam',417,90);
    student1.recorrection();
    var student2=new stdentDetails('rahul  ','lagishetty','gitam',330,56);
    student2.recorrection();
    console.log(student1,student2);