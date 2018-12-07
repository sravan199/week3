
let express =require('express');
let app=express();

let BodyParser=require('body-parser');

app.use(BodyParser.json({limit :'10mb'}));
app.use('/student',require('./student'));

app.get('/',(req,res)=>{
    res.send('hi ');
});
app.listen(5000,()=>console.log('5000 port started'));
