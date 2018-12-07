var student =require('./student.json');
var router =require('express').Router();

router.get('/:id',(req,res)=>{
    console.log(req.params.id)
    res.json(student.find(x=>x.id==req.params.id));
});

router.post('/',(req,res)=>{
  let body=req.body;
  let index=student.findIndex(x=>x.id==body.id)
  if(index===-1){
      student.push(body)
  }
  else {
      student[index]=body;
  }
  res.json(body.id);
});

router.put('/:id',(req,res)=>{
    let body=req.body;
    let index=student.findIndex(x=>x.id==req.params.id);
    if(index==-1){
        body.id=req.params.id;
        student.push(body);
        res.json(body.id);
    }
    else{
        student[index].name=body;
        res.send('updated');
    }
});

router.delete('/:id',(req,res)=>{
    let s=student.findIndex(x=>x.id==req.params.id);
    student.splice(s,1);
    res.send('student');
});

module.exports=router;


















