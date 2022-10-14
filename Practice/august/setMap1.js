//set
//set does not stores duplicaten value
//set does not stores the value by index
//to set object itrable format

let setA = new Set()
console.log(setA)

setA.add('apple')
setA.add('banana')
setA.add('strawberry')
console.log(setA)


let q1 = setA.size
console.log(q1)

let q2 = setA.has('apple')
console.log(q2)

let q3 = setA.delete('banana')
console.log(q3)

let q4 = setA.clear()
console.log(q4)
console.log(setA)

let a = [11, 11, 22, 22, 44, 55, 22]

a = new Set()
console.log(a)



let sa = [11, 22, 33, 44]
for (let i = 0; i < sa.length; i++) {
    console.log(sa[i])
}


let info = {
    firstname: "sara",
    profile: "Tester"
}

for (let key in info) {
    console.log(key, info[key])
}


//set method for loop
let SetQ = new Set([11, 22, 33, 44, 55, 66, 11, 22, 33])


for (let prop of SetQ) {
    console.log(prop)
}

SetQ.forEach(function (el) {
    console.log(el)

})





//
//map are stores different types keys
let mapA = new Map()
console.log(mapA)

mapA.set('firstN', 'sai')
mapA.set(1, 'rollno')
mapA.set(true, 'value')

console.log(mapA)

console.log(mapA.size)

let rr = mapA.has(true)//only chek the keys
console.log(rr)

// let ff=mapA.has(rollno)
// console.log(ff)

//get()//the get keys values
let rr1 = mapA.get(true)
console.log(rr1)

let tt = mapA.delete(true)
console.log(tt)

let tt1 = mapA.clear()
console.log(tt1)


let mapD = new Map([[1, 'supriya'],
    ['staus', 'single'], [true, 'working']])
console.log(mapD)

console.log(mapD.keys())
console.log(mapD.values())
console.log(mapD.entries())

for(let key of mapD.keys())
{
    console.log(key)
}


for(let val of mapD.values())
{
    console.log(val)
}

for(let [key,val] of mapD.entries())
{
    console.log(key,val)
}