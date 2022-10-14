// array string object function 
// function object , function , string , number


// number as parameter to function
function mul(x,y) 
{
return x*y
}
let dd=mul(2,4)
console.log(dd)

//string as parameter to function

function countvo(word)
{
    count=0
    for(let i=0;i<word.length;i++)
    {
     word[i]=word[i].toLowerCase()
     if(word[i]=="a"|| word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u")
     {
         count=count+1
     } 
    }
    return count
}
let ss=countvo("sUpriyA")
console.log(ss)

// string are immmutable we cannot change single character

let n="dipa"
console.log(n[0])
n[0]="r"
n="arti"
console.log(n)

//array as parameter to function
let mark=[11,22,33]
function sumAl(arr)
{
    arr[0]=55
    console.log(arr)
}
console.log(mark)
 sumAl(mark)
 console.log(mark)

 let p=[90,22,55]
 let q=[20,40,50]
 q=p
 p[0]=12
 q[0]=70
 console.log(p)
 console.log(q)
 
console.log("-----------")

 let a=[44,55,66]
 function sum(arr)
 {
     let ray=arr.reduce(function(acc,el){
         return acc+el
     },0)
     return ray
 }
 let kk=sum(a)
 console.log(kk)

 // object as parameter to function

 let employee={
     name:"sonali",
     designation:"manager"
 }

 let employee1={
     name:"diya",
     designation:"ceo"
 }

  employee1=employee

 employee.name="pragati"
 console.log(employee)
 console.log(employee1)

for (let key in employee)
{
    console.log(key,employee[key])
}   


let emplyee2={
    name:"supriya",
    age:22,
    designation:"tester"
}
function printObj(obj)
{
    console.log(obj)
  obj.age=44
}
console.log(emplyee2)
printObj(emplyee2)
console.log(emplyee2)
