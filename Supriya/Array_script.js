
let numbers = [90, 80, 70, 60, 50]

console.log(numbers[0])
console.log(numbers[1])

//ARRAY IN JAVASCRIPT
// 0 1 2 3
let names = ["supriya", "rutuja", "poonam", "dipa"]
let aa = names.length
console.log(aa)
console.log(names[names.length-1])


//METHODS OF ARRAY
//PUSH() ---add the element last

let bb = names.push("Ashwini")
console.log(names)
console.log(bb)

//UNSHIFT()----add the element begin
let cc = names.unshift("Aarti")
console.log(names)
console.log(cc)

//POP()-----removes the last element
let dd = names.pop()
console.log(names)
console.log(dd)

//shift()-----removes the first element
let ee = names.shift()
console.log(names)
console.log(ee)

//INCLUDE () ----------search the element
let qq = names.includes("rutuja")
console.log(qq)

//LOOP
for(let i=0;i<5;i++)
{
console.log(i)
}


for(let i=0;i<=3;i++)
{
    console.log(i)
}
console.log("-------------")

let city=("pune","mumbai","nagar","satara")

for(let i=0;i<city.length;i++)
{
    console.log(city[i])
}

console.log("-----reverse-----")
for(let i=3;i>=0;i--)
{
    console.log(city[i])
}

//methods
//indexOf()---
let state=["Maharashtra","Kashmir","Goa","Gujarat"]
{
    let ss=state.indexOf("Goa")
    console.log(ss)
}

//reverse
let ssa=state.reverse()
console.log(ssa)

//sort
let ssb=state.sort()
console.log(ssb)

let info=["supriya","Tajane","supriyatajane2015@gmail.com"]
let xx=info.join("_")
console.log(xx)