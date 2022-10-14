// string operator

let a=12
let b=13
let c="hello"
console.log(a+b+c)
console.log(c+b+a)
console.log(a+c+b)

let firstName="supriya"
let lastName="tajane"
//concat
console.log(firstName+" "+lastName)
//string interpolation string literal
console.log("my firstName is "+firstName+ " my lastName is "+lastName)
console.log(`my firsName is ${firstName} and lastName is ${lastName}`)

//comarison operator
console.log(3<3)
console.log(3<=3)
console.log(4===4)
console.log(5=='5')
console.log(2==='2')

console.log(typeof 2)
console.log(typeof '5')

console.log(2=='2')
console.log(2!='2')
console.log(2!=='2')

console.log(3==3)
console.log(3!==3)
console.log(3==='3')

console.log(4==3)
console.log(4!==2)

console.log(1<4)
console.log(2>4)

//logical operator
// AND OR NOT
console.log("---&&---||")
console.log(3>6||6==6)
console.log(3<6&&2!=2)
console.log(!false)
console.log(!true)
console.log(2*4==8&&true)

//condition statement
//if(){boolean
//   this will run condition true  }
//{ else
//}

if(2!==2){
    console.log("hello")
}
else{
    console.log("bye")
}

if (8!=='8')
{
    console.log("hello")
}
else{
    console.log("bye")
}

if(true&&6==6){
    console.log("hello")
}
else{
    console.log("bye")
}
//true -1 ,1,'A',6>5
//false unefined,null,0,naN,false,7==='7'

if(undefined){
    console.log("hello")
}
else{
    console.log("bye")
}

if(null){
    console.log("hello")
}
else{
    console.log("bye")
}

if(NaN)
{
    console.log("hello")
}
else{
    console.log("bye")
}


if(false)
{
    console.log("hello")
}
else{
    console.log("bye")
}