// function
function sub(x,y)
{
    return x-y
}
let cc=sub(40,20)//calling
console.log(cc)//printing the function

let k=200
console.log(k)

//function as parameter to another function
function multiplication(x,y)
{
    return x*y
}
function test(fun)
{
    let cd=fun(20,40)
    return cd
}

let dddd=test(multiplication)
console.log(dddd)

//function returns
function demo()
{
    return 20
}
let zz=demo()
console.log(zz)

function demo1()
{
    return "supriya"
}
let yy=demo1()
console.log(yy)

function demoArr()
{
    return [11,22,33,44,55]

}
let ww=demoArr()
console.log(ww)
console.log(ww[ww.length-1])

function demobj()
{
    return{
    name:"devanshi",
    lastname:"tajane"
    }
}
let xx=demobj()
for(let key in xx)
{
    console.log(key,xx[key])
}

function demo2()
{
    let ll=function()
    {
        console.log("morya")
    }
    return ll
}
let kk=demo2()
kk()
