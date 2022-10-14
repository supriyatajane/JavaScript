//functiom delcartion

// function addition(x,y)
// {
//     return(x+y)
// }
// addition(2,9)

// //function expression
// let add=function(x,y)
// {
//     return(x+y)
// }
// let a=add(2,3)
// console.log(a)

// //arrow function
// let add1=(x,y)=>{
//     return(x+y)
// }
// let ss=add1(10,5)
// console.log(ss)

//laxical scope function
function addition1()
{
    let t=10
    let d=10
    console.log(t+d)

    function addition2()

    {
        let k=2
        let j=2
        console.log(t+d)
        console.log(k+j)
 
        function addition3()
        {
            let m=4
            let l=4
            console.log(t+d+k+j)
            console.log(m+l)
        }
        addition3()
    }
    addition2()
}
addition1()

//laxical scopesd56`zp[s-x[[[[[[=]]]]]]]

function mul1()
{
    let s=2
    let t=4
    console.log(s*t)
    function mul2()
    {
        let q=3
        let w=3
        console.log(s*t)
        console.log(q*w)
        function mul3()
        {
            let y=8
            let i=8
            console.log(s*t*q*w)
            console.log(y*i)
        }
        mul3()
    }
    mul2()
}
mul1()

console.log("-----let---const----var-----")
//let const var
let d=200
{
    let d=100
    console.log(d)
}
console.log(d)

//const
const x=100
{
    const x=50
    console.log(x)
}
console.log(x)