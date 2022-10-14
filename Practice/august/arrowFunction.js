//laxical scope function
//laxical function = function inside function we acess above function variable to another function 

function addition()
{
    let x=10
    let y=10
    console.log(x+y)
    function addition1()
    {
        let z=12
        let v=13
        console.log(z+v+x+y)
        function addition2()
    {
        let a=20
        let b=20
        console.log(z+v+x+y+a+b)
    }
    addition2()
    }
    addition1()
}
addition()

//we use laxical function use the varible to another function inside 

//closure
//after function close the value store return keyword because of closure
//closure achive privcy
function sub(x,y)
{
    console.log(x-y)
    return x-y
    console.log('hello')
}
let qq=sub(10,5)
console.log(qq)

// difference between arrow function and simple function

let info={
    firstName:"supriya",
    lastName:"tajane",

    display:function()
    {
        console.log(this.firstName+this.lastName)
        let display2=function()
    {
        console.log(this.firstName+this.lastName) 
    }
    display2()
    }
    
}
//console.log(info.display())
info.display()



//arrow function
let info1={
    firstName:"supriya",
    lastName:"tajane",

    display:function()
    {
        console.log(this.firstName+this.lastName)
        let display2=()=>//refers the parent
    {
        console.log(this.firstName+this.lastName) 
    }
    display2()
    }
    
}
//console.log(info.display())
info1.display()


//arrow function refers above function parents and window
let person={
    firstName:"diya",
    lastName:"sharma",
    display:()=>{
        console.log(this.firstName+this.lastName)
      let display2=()=>{
            console.log(this.firstName+this.lastName)
        }
        display2()
    }

}

//person.display()

let rani={
    firstName:"rani",
    lastName:"shrma",
    display:function()
    {
        console.log(this.firstName+this.lastName)
    }
}

let sara={
    firstName:"sara",
    lastName:"kadam"
    
}

