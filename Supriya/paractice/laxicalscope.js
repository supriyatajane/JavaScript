// function declartion 

function addtion(x,y){
    return x + y
}
let s = addtion(12,13)
console.log(s)

// function expression 

let addition2 = function(x,y){
    return x + y
}
let s2 = addition2(12,13)
console.log(s2)

// arrow
let addition3 = (x,y)=>{
    return x + y
}

let s3 =addition3(12,13)
console.log(s3)

// ------------------------------------------>
console.log("-----laxical scope---------")
// Lexical scope
function addition5(){
    let x = 10
    let y = 20
    console.log(x+y)
    function addition6(){
        //console.log(a)
        let r = 100
        let i = 50
        console.log(x+y)
        console.log(r+i)
        function addition7(){
            console.log(x+y+r+i)
            let a = 20
            let b = 40
            console.log(a + b)
        }
        addition7()
    }
    addition6()
}
addition5()

console.log("-----closure--------")
// closures


function addition8(x1,y1){
    return x1 + y1
    console.log('hello')
}
let j = addition8(22,33)
console.log(j)


// Encapsulation
function addition8(){
    let a = 10 
    let b = 20
    return function(){
        console.log(a+b)
    }
}

let r = addition8()
console.log(r)

// let r = function(){
//     console.log(a+b)
// }
// }

r()


// let and const are blocked
let d = 200
{
    let d = 100
    console.log(d)
}
console.log(d)


// const 
const u = 1000
{
    const u = 100
    console.log(u)
}

console.log(u)

// var 

{
    var f = 1000
    console.log(f) // 1000
}
console.log(f) // 1000


// let and const are blocked scope 
// var key is functionscoped

// let xa = 100 
// xa = 200
// console.log(xa)

// var ya = 300
// ya = 700
// console.log(ya)
// const rr = 500
// rr = 900
// console.log(rr)

// function 

// var h = 100
// let g = 100


// function add6(){
//     console.log(h) //100
//     console.log(g) //100
//     h = 500
// }
// console.log(h) // 100
// add6() //
// console.log(h) // 500


// program 2

// var h = 100
// let g = 100


// function add6(){
//     let h = 500
//     console.log(h)   // 500
//     console.log(g)   // 100
//     h = 600
   
// }
// console.log(h)   //100
// add6() 
// console.log(h)   // 100


// program 3

//var h = 100

// function add6(){
//     h = 445
//     console.log(h) // 445
 
// }
// console.log(h) // 100
// add6() // 
// console.log(h) // 445

// program 4


// var is functioned scope

var h = 100

function add6(){
    var h = 445
    console.log(h)  // 445
 
}
console.log(h)  // 100
add6() 
console.log(h)  // 100


// we can reassign to let and var but cannot to const 
// scope -- const and let are blocked scope and var is functioned 
//scope 
// let and var both are quite similar
