 // map and set
// stores the unique value 
// does not stores value by index
// to set object we can pass iterable

// method: - add(),delete(),has(),clear()
// property - size



let setA = new Set()
console.log(setA)
setA.add("apple")
setA.add("banana")
setA.add("chiku")
setA.add("banana")
console.log(setA)

// let q1 = setA.size
// console.log(typeof q1)

// let q2 = setA.has("apple")
// console.log(q2)

// let q3 = setA.delete('apple')
// console.log(q3)
// console.log(setA)

// let q4 = setA.clear()
// console.log(q4)
// console.log(setA)


let names = [22,33,44,55,66]
for(let i = 0 ; i < names.length ; i++){
    console.log(names[i])
}

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    skills:["python","javascript","c++"]
}
for(let property in info){
    console.log(property,info[property])
}

// .dot notation does not work inside loop


let setB = new Set(["tomato","potato","brinjal","potato"])
console.log(setB)

for(let ele of setB){
    console.log(ele)
}

setB.forEach(function(el){
    console.log(el)
})

// Map 

// basic object only stores string as key 
// map stores other data type as let 

let student = {
    firstN:"chinmay",
    lastN:"deshpande",
    1:"English"

}
console.log(student)
let mapA = new Map()
mapA.set('firstN',"chinmay")
mapA.set('lastN',"deshpande")
mapA.set(1,"English")
mapA.set(true,"isMarried")
console.log(mapA)


// Map -- set(key,value)
console.log(mapA)
console.log(mapA.size)

// has()
let q222 = mapA.has(true)
console.log(q222)

// get()
let q33 = mapA.get(true)
console.log(q33)

// mapA.clear()
// console.log(mapA)

let q44 = mapA.delete(true)
console.log(mapA)

//-----------------------------------------------/


let mapB = new Map([
    ["firstName","chinmay"],
    ["lastName","deshpande"],
    [true,"isMarried"],
    [1,"English"]
])

console.log(mapB)

console.log(mapB.keys())
console.log(mapB.values())
console.log(mapB.entries())

// keys 

for(let key of mapB.keys()){
    console.log(key)
}

for(let val of mapB.values()){
    console.log(val)
}
for(let [key,val] of mapB.entries()){
    console.log(key,val)
}
