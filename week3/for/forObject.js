var objDetails={
    'name':'sravan',
    'id':224,
    'student':function(){
         return true;
    },
    'newobj':{'college':'gitam'}
};

for(var temp in objDetails)
{
    console.log(temp,objDetails[temp]);
}

var details=['sravan',224,true,{'college':'gitam'}];

details.forEach((element,index) => {
    console.log(index,element);
});
for(let temp in details)
{
    console.log(temp,details[temp]);
}
for(let temp of details)
{
    console.log(temp);
}