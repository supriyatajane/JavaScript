//.rest opretor are use for comama separted value convert the array

function rest(...arr)
{
let a=arr.reduce(function(acc,el){
    return acc+el
},0)
return a
}

let ss=rest(12,33,44,55,66,33)
console.log(ss)


function rest1(a,...arr)
{
let b=arr.filter(function(el){
    return el>a
})
return b
}
let jj=rest1(10,20,30,69)
console.log(jj)


//spread opertor

//they are use pass the specific value array to function

function sprad(a,b)
{
    console.log(a+b)
}

let numbers=[11,22,33,44,55]
sprad(...numbers)


//using spread operatror we also concat two array
let a1=[1,2,3,4]
let a2=[2,3,4,5]

let a3=a1.concat(a2)
console.log(a3)

//problem1
let a4=[...a1,...a2]
console.log(a4)

//problem 2
let q=[345,567]
let q1=[1,...q]
console.log(q1)

let info={
    firstname:"supriya",
    lastname:"Tajane"
}

let info1={
    father:'sunil',
    mother:'dipali',
    brother:'abhijit'
}
let demo={...info,...info1}
console.log(demo)


//in simple object if we copy one object to another object then not create new object that create only reference
//and one object ubdated then automatically second also updated
let vehicle={
    color:"red",
    type:'TVTV'
}
let vehicle2=vehicle

vehicle2.color='black'
console.log(vehicle2)
console.log(vehicle)

//in spred case not create refernce that case create new object
//if we updated one object value they affected second object
let ay=[11,22,33]
let c=[...ay]
console.log(c)

c.push(222)
console.log(c)
console.log(ay)


//that create case create new object
let sky={
    color:'blue'
}

let cloud={...sky}
cloud.color='black'
console.log(cloud)
console.log(sky)



