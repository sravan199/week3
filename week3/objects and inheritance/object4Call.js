
function studentDetails(firstName,lastName,college,id,marks){
    this.firstName=firstName;
    this.lastName=lastName;
    this.college=college;
    this.id=id;
    this.marks=marks;
    this.recorrection=function(){
        return this.marks+=5;
          
        }
    }
    
    var student1=new studentDetails('sravan','guduru','gitam',417,90);
    student1.recorrection();

    var student2=new studentDetails('rahul  ','lagishetty','gitam',330,56);
    student2.recorrection();

    console.log(student1.id,student2.id);

    function totalMarks(tmarks){
    var tmarks=tmarks;
    }
    var student =new totalMarks(100);
     student.recorrection=student1.recorrection;
     console.log(student.recorrection.call(student1));
     console.log(student1);