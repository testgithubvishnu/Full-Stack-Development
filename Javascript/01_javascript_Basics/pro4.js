let obj={
    icecream:560,
    noodles:679,
    chocolate:970,
    coco:549,
}
for(let i=0;Object.keys(obj).length;i++)
{
    console.log("price of"+Object.keys(obj)[i]+"is:"+obj[Object.keys(obj)[i]])
}