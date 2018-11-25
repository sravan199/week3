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