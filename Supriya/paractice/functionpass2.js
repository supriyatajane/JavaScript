// function types
//1 function declaration
function add(x,y)
{
    return(x+y)
}
let aa=add(2,3)
console.log(aa)

//function expression
let add1=function(x,y)
{
    return (x+y)
}
let bb=add1(4,3)
console.log(bb)

// arrow function
let add3=(x,y)=>
{
    return(x+y)
}
let dd=add3(20,30)
console.log(dd+10)

//arrow function
let add4=(x,y)=>(x+y)
let ee=add4(22,22)
console.log(ee)

console.log("--------------------function passes------------------------------------")
//number passes parameter to function
// return type also number

function printNumber(x,y)
{
    let sum=x+y
    return sum
}
let ff=printNumber(12,12)
console.log(ff)

// string passes parameter to function
//return type also string

function greet(word)
{
    let name=`welcome ${word}`
    return name
}
let gg=greet('supriya')
console.log(gg)

// prameter  and return type array
let number=[11,22,33,44,55,66,77,88]
function demo(arr)
{
    let hh=arr.slice(-5)
    return hh
}
let ll=demo(number)
console.log(ll)

//parameter and return type object
let children={
    fname:"ram",
    lname:"das"
}

function name(obj)
{
    let lll=obj.fname
    return lll
}
let rrr=name(children)
console.log(rrr)


//function as parameter to another function
function addition(x,y)
{
    return x+y
}
function print(fun)
{
    let sum=fun(11,11)
    return sum
}
let qq=print(addition)
console.log(qq)

//function as return value another function
function pr()
{
    let a=10
    let b=20

    return function()
    {
        console.log(a+b)
    }
}
let ab=pr()
ab()

// booleas as parameter and return type
function isDriver(flag)
{
    if(flag)
    {
        console.log('you can drive')
        return true
    }
    else{
        console.log('you cannot drive')
        return false
    }
}
let req=isDriver(false)
console.log(req)