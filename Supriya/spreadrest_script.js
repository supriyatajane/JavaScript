// rest 
function add(...arr)
{
    let gh=arr.reduce(function(acc,el)
    {
    return acc+el
    },0)
    return gh
}
let rr=add(1,2,3,4,5,6,7,8,9)
console.log(rr)

//filter
function filter(a,...aaa)
{
    let yy=aaa.filter(function(el,index){
       return el>a
    })
    return yy
}
let jj=filter(10,20,30,40,50,60)
console.log(jj)
let ff=filter(20,70,5,4,90)
console.log(ff)

// sprad oprator
let number=[12,34,56,78,90]
function mul(a,b,c,d,e)
{
    console.log(a+b+c+d+e)

}
mul(...number)