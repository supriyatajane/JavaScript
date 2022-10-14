// object literal

let supriya={
    firstname:"supriya",
    lastname:"tajane",
    age:22,
    printname:function()
    {
        console.log(this.firstname+" "+this.lastname)
    }
}
console.log(supriya)
supriya.printname()
console.log(supriya.printname)

let printName2=function()
{
    console.log(this.firstname+" "+this.lastname)
}
printName2()

// progaram
let supriya1={
    firstname:"rani",
    lastname:"tajane",
    displayName:function()
    {
        console.log(this.firstname+" "+this.lastname)
    }

}
let a=supriya1.displayName()

let b=function()
{
    console.log(this.firstname+" "+this.lastname)
}
b()

//
console.log("----------------")

let amol={
    firstname:"amol",
    lastname:"rahane",

}

let pooja={
    firstname:"pooja",
    lastname:"rahane"
}

let displayName1=function()
{
    console.log(this.firstname+" "+this.lastname)
}

// bind 
let fn=displayName1.bind(pooja)
fn()
displayName1.bind(amol)()

function add(){
    return function(){
        console.log('hello')
    }
}

add()()

// program 3

function displayName3()
{
    console.log(`hi  ${this.firstname} ${this.lastname}`)
}

let rohit={
    firstname:"rohit",
    lastname:"sharma"
}

let virat={
    firstname:"virat",
    lastname:"kohli"

}
displayName3.call(rohit)
displayName3.call(virat)

//
function displayName4(greet)
{
    console.log(`${greet} ${this.firstname} ${this.lastname}`)
}

let sachin={
    firstname:"sachin",
    lastname:"tedulkar"
}

let dhoni={
    firstname:"mahedra",
    lastname:'dhoni'
}

displayName4.apply(sachin,['good morning'])

let s={
    firstname:"kl",
    lastname:"rahul",
display:function()
{
    console.log(this)
    console.log(this.firstname+" "+this.lastname)
}
}

s.display()

let c=
{
    firstname:"jofra",
    lastname:"archar",
    display:()=>{
        console.log(this)
        console.log(this.firstname+" "+this.lastname)
    }

}
c.display()

let disha={
    firstname:"disha",
    lastname:"patil",

    displays:fun
}


