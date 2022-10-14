// comparison operator
//<,>,>=, <= , !=, ===, !==, ==

//basic == and ===

console.log(2==2)
console.log(2==='2')
console.log(3!=='3')
console.log(8!=='8')

//conditional statement

//mark ==> 'A' || 'B' || 'C'
// marks > 90 ===> A
// marks > 60 &&  marks <= 90 ===> B
// marks < 60 ====> c
console.log("--------")
// if statement 
let mark=90
if(mark>90)
{
    console.log("you got A grade")
}
if(mark>60 && mark<=90)
{
    console.log("you got B grade")
}
if(mark<60)
{
    console.log("you got C grade")
}

// if else statement 
if(mark>90){
    console.log("you got A grade")
}
else if(mark>60 && mark<=90)
{
    console.log("you got B grade")
}
else if(mark<60){
    console.log("you got C grade")
}
else{
    console.log("hello")
}

// switch statement
let city="pune" 
         

switch(city){
    case "pune":
    console.log("MH")
    case "Bhopal":
     console.log("MP") 
     case "Lucknow":
     console.log("UP")  
default:
    console.log("please enter the correct city")
}

//break statement

switch(city){
    case "pune":
    case"Nagpur":
    case "solapur":
        console.log("MH")
        break
case "Lucknow":
    console.log("UP")
    break
    case "Bhopal":
    console.log("MP")
    break
    default:
    console.log("please enter the correct city")
}

console.log("------Loop---------")
//loops

// for loop
for(let i=10;i>=0;i--)
{
    console.log(i)

}


//let i=0
//for(;i<5;){
//console.log(i)
//}
//i++

// break keyword
console.log("------------------")

for(let i=0;i<5;i++)
{
    if(i==2)
    {
        break
    }
    console.log(i)
}

for(let i=0;i<5;i++){
    if(i==2){
        continue
    }
    console.log(i)
}

let a=[1,2,3,4,5]

 let c=a.map(function(el){
    return el*2
})
console.log(c)