var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
var app=express();
var mongojs = require('mongojs');
var db = mongojs('fitnessApp', ['users']);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public') ));


app.get('/',function(req,res){
    db.users.find(function (err, docs) {
        console.log(docs);
        res.render('index',{temp:'Fitness Guide',docs});
    })
 });

 app.post('/user/add',function(req,res){
        console.log(req.body.password);
         var newUser={
             name:req.body.name,
             password:req.body.password
         }
        db.users.insert(newUser,function(err,result){
            if(err) console.log(err);
            else    res.redirect('/');           
        })
 });



 app.delete('/users/delete/all',function(req,res){
        db.users.remove();
 })

app.listen(3000,function(){
console.log('port 3000 started');
});