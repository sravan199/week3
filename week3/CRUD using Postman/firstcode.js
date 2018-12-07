// let http=require('http');


// var server=http.createServer((req,res)=>{
// res.end('hello 2.0');

// });
// server.listen(400,'localhost',()=>{console.log('400 port started')});
let express =require('express');
let app=express();

let BodyParser=require('body-parser');

app.use(BodyParser.json({limit :'10mb'}));
app.use('/student',require('./student'));

app.get('/',(req,res)=>{
    res.send('hi ');
});
app.listen(5000,()=>console.log('5000 port started'));