//data types

let x=10
console.log(x)
console.log(typeof x)

let y=true
console.log(y)
console.log(typeof y)

let z="supriya"
console.log(z)
console.log(typeof z)

//arthmatic operation
let no=12
let no1=10
console.log(no+no1)
console.log(no-no1)
console.log(no/no1)
console.log(no%no1)

//comparison operator
//=,==,===,!==,!=,<,>,<=,>=,boolean

console.log(6<10)
console.log(10>6)
console.log(10<=10)
console.log(2==2)
console.log(3!=3)
console.log(4!='4')

//== check the value should be same

console.log(2==2)
console.log(3=='3')
console.log(4=='-4')

//===(check the absolute value and type should be same)
console.log(2==='2')
console.log(3===3)

console.log(6!='6')
console.log(1!='5')

console.log(5!=='5')
console.log(6==='6')
console.log(1===1)

//logical operator
//And,or,not
//and
console.log(7 >= 7 && 8 <= 8)//true
console.log(6 === 6 && 6 == '6')//true
console.log( 7 != 8 && 7 == 9)//false
console.log(7 == 7 && 7 !== 8)//true

//or
console.log(7 == 7 || false)//true
console.log(7 === '7' || 6 != '6')//false
console.log(7 == 7 || 7 !== '7')//true
console.log(7 === '7' || true)//true

//not
console.log(!true)
console.log(!false)

//desion statement or condition statement
//one entity and different changes outcome=>condition statement
//if{
//  condition true that wiill excute this part
//}
//{else
 // condition false than execute   
//}
// 

// truthy=-1,
//falsy=0,undefined,null,nan,---,====,

if(2<3)
{
    console.log('hello')
}
else
{
    console.log('bye')
}

if(4==='4')
{
    console.log('hello')
}
else
{
    console.log('bye')
}
if(3=='3')
{
    console.log('hello')
}
else{
    console.log('bye')
}

if(undefined)
{
    console.log('hello')
}
else{
    console.log('bye')
}

if(NaN)
{
    console.log('hello')
}
else{
    console.log('bye')
}

if(-66)
{
    console.log('hello')
}
else{
    console.log('bye')
}

if('ss')
{
    console.log('hello')
}
else{
    console.log('bye')
}

//if statement

// if(tn>0 && tn<=5)
// {
//     console.log('5 percent')
// }
// if(tn>5 && tn <=10)
// {
//     console.log('10 percent')
// }
// if(tn>10)
// {
//     console.log('20 percent')
// }
// else{
//     console.log('inncorrct ')
// }

tn=7
if (tn > 0 && tn <= 5) {
    console.log('5 percent')
}
else if (tn>5 && tn<=10) {
    console.log('10 %')
}
else if (tn > 10) {
    console.log('20 % discount')
}
else {
    console.log('Incoorect input')
}

// ternary operator
let fullName="supriya"
if(fullName="supriya")
{
    console.log('welocome!')
}
else{
    console.log('not welocome')
}

 fullName==='supriya'?console.log('welcome'):console.log('bye')
 let num=12
 num==44?console.log("hiiii"):console.log("bye")

 // switch case
let city="sagamaner"
//  switch(city)
//  {
//    case "sagamaner":
//        console.log("mh")  
//        case" jaipur":
//        console.log("rj")
//        case"bhopal":
//        console.log("mp")

//        default:console.log("incorrect")
//  }
 
 switch(city)
{
   case "sagamaner":
       console.log("mh")
       break  
       case" jaipur":
       console.log("rj")
       break
       case"bhopal":
       console.log("mp")
       break

       default:console.log("incorrect")
 }
 