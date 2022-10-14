for(let i=0;i<5;i++)
{
    console.log(i)
    console.log("hello")
}

//break ,continue
for(let i=0;i<4;i++)
{
    if(i==2)
    {
        break
    }
    console.log(i)
}

console.log("------continue---")
for(let i=0;i<6;i++)
{
    if(i==5)
    {
        continue
    }
    console.log(i)
}

let k=0
for(;k<7;){
    console.log(k)
    k++
}
//for
//while
console.log("--------------while loop")
let z=0
while(z<=5)
{
    console.log(z)
z++
}

let p=5
while(p>=0)
{
    console.log(p)
    p--
}

console.log("---break ------continue")
let l=7
while(l>=0)
{
    if(l==4){
    break
    }
    console.log(l)
    l--
}

console.log("---------continue--")
let j=0
while(j<=7)
{
    if(j==5){
        j++
    continue
    }
    console.log(j)
    j++
}



console.log("-----------")
//while loop 
let i=0
while(i<=10)
{
    if(i==4){
    break
    }
    console.log(i)
    i++
}

console.log("----continue---while")
let m=0
while(m<=7)
{
    if(m==5)
    {
        m++
        continue
    
    }
    console.log(m)
    m++
}

for(let i=0;i<10;i++)
{
    if(i==2){
        break
    }
    console.log(i)
    
}

console.log("---------for----")
for(let i=0;i<5;i++)
{
    if(i==4)
    {
        continue
    }
    console.log(i)

}

console.log("---------")
let city="pune"
switch(city)
{
    case "sagamaner":
     case "pune":
         case "nagpur":
    console.log("MH")
    break
    case "Bhopal":
        console.log("MP")
        break
        default:
        ("please enter the correct city")
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

let markss=50
if(markss>=90)
{
    console.log("you got a grade")
} 
if(markss>60 && markss<90)
{
    console.log("you got b grade")

}
if(markss>50 && markss<60)
{
    console.log("you got c grade")
}