var event =require('events');
var util=require('util');

var eventEmitter=new event.EventEmitter();
eventEmitter.on('myevent',function(a){
    console.log(a+' myevent was emitted');
});
eventEmitter.emit('myevent','first');



function Person(name){
this.name=name;
}

util.inherits(Person,event.EventEmitter);

var sravan=new Person('sravan');
var rahul=new Person('rahul');
var arr=[sravan,rahul];

arr.forEach(name=>{name.on('speak',(msg)=>{
        console.log(name.name+' said that '+msg);
    })
})
sravan.emit('speak','am feeling good today');
