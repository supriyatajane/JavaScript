// rest parameter
function addition(...arr)
{
    return arr.reduce(function(acc,el){
       return  acc+el
    },0)
}

let dd=addition(11,22,33,44,55,66)
console.log(dd)

//spread operator
let no=[11,22,33,44,55]
function addition1(a,b,c)
{
    console.log(a+b+c)
}
addition1(...no)

// combine two array element using spradrest
let a=[11,22,33]
let b=[22,33,44]
let r=[...a,...b]
console.log(r)

//for of loop
let person={
    firstname:"kl",
    lastname:"rahul",
    age:22

}

for(let key in person)
{
    console.log(key,person[key])
}

// for of for array
let name=["rani","rajshri","tara"]
for(let list of name)
{
    console.log(list)

}

// for of for object
let employee={
    names:"supriya",
    desg:"coder"

}
console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))

//keys
for(let list1 of Object.keys(employee))
{
    console.log(list1)
}

//values
for(let list2 of Object.values(employee))
{
    console.log(list2)
}

// entries
for(let [key,value] of Object.entries(employee))
{
    console.log(key,value)
}

//ternary operator
// get single line result
let aa=10
let bb=20
 
let cc=aa==bb?"a is eql to b":"not eql"
console.log(cc)

//=short circuit
let n=10
n++
n+1
n=+1

console.log("----------nullish------------")
//nullish operator
const foo = null ?? 'default string';
console.log(foo);

let qq

let yy=qq??'hello'
console.log(yy)



let qwerty = 7 === 7 || 10
console.log(qwerty)

let qwerty2 = 7===7 && 8!==8
console.log(qwerty2)


let personA = {
    brotherOne:{
        firstName:"chinmay",
        lastName:"deshpande",
        parent:{
            father:"shirish",
            mother:"deshpande"
        }
    }

}

//optional parameter

//console.log(personA.brotherTwo.parent.father)
console.log(personA?.brotherTwo?.parent?.father)
console.log(personA?.brotherOne?.parents?.father)




// let hj 
// console.log(hj)
// console.log(uiuiui)