// set map

obj={
    name:"sai",
    lname:"sharma",
    age:22
}
obj1={
    name:"raj",
    lname:"varma",
    age:33
}
console.log(obj.name)

//
// class is user define data type
class player
{
    pnme=undefined
    plname=undefined
    age=undefined
}
let pp=new player
pp.pname="rohit"
pp.plname="sharma"
pp.age=35
console.log(pp)

// constructor
class player1
{
    constructor(fn,ln,ag)
    {
        this.fname=fn
        this.lname=ln
        this.age=ag
    }
}
let pp1=new player1("virat","kohli",33)
console.log(pp1)

// using set function set the value
class test
{
    setName(nm)
    {
        this.name=nm
    }

    setSkill(sk)
    {
        this.skill=sk
    }

    setAge(ag)
    {
        this.age=ag
    }

}
let pp2=new test
pp2.setName("supriya")
pp2.setSkill("cypress")
pp2.setAge(66)
console.log(pp2)

//set  does not stores the duplicate value

let setQ=new Set([11,22,33,44,11,22,11,55,66])
console.log(setQ)

//size
let dd=setQ.size
console.log(dd)

//add
let dd1=setQ.add(777)
console.log(dd1)

//has
let dd2=setQ.has(11)
console.log(dd2)

//delete
setQ.delete(777)
console.log(setQ)

//clear
setQ.clear()
console.log(setQ)

 let setW=new Set([22,33,454])

 for(let sa of setW)
 {
console.log(sa)
 }

 // example of arrys find out duplicate element
 let nos=[111,222,333,444,111,222,333,555]

 let setC= new Set(nos)
 Array.from(setC)
console.log(setC)

console.log("------map----")

// MAP
let mapD=new Map()

console.log(mapD.size)

mapD.set([12,89,56,78],"marks")
console.log(mapD)

mapD.set(true,"isadult")
console.log(mapD.get(true))

let ru=mapD.has(true)
console.log(ru)

console.log(mapD)

mapD.delete(true)
console.log(mapD)

let mapE=new Map([
    [1,"rollNumber"],
    ["color","red"],
    [true,"unmarried"],
    [{a:"s",b:"q"},33]
])
console.log(mapE)

for(let a of mapE.keys()){
    console.log(a)
}

for(let b of mapE.values()){
console.log(b)
}

for(let [key,val] of mapE.entries())
{
    console.log([key,val])
}

let mapL=new Map([
    ["name","supria"],
    ["lname","tajane"],
    ["age",22],
    [{v:"s",w:"p"},33]
])

for(let ss of mapL.keys())
{
    console.log(ss)

}

for(let qq of mapL.values())
{
    console.log(qq)
}

for(let [keys,value] of mapL.entries())
{
    console.log(keys,value)
}

// set practice 
// set are used remove dublicate element

let setF=new Set([11,33,444,55,22,22,22,11,33,])

console.log(setF)

// for loop for set
for(let sf of setF)
{
    console.log(sf)
}

// clear,has,add,delete,size

setF.add(100)
console.log(setF)

let rr=setF.has(100)
console.log(rr)

let aa=setF.size
console.log(aa)

setF.delete(444)
console.log(setF)

setF.clear()
console.log(setF)

//array form 
let qqq=[11,22,33,11,22,111,11,11]

let setE=new Set(qqq)
Array.from(setE)
console.log(setE)

console.log("---------------")

// map
let mapC=new Map()
console.log(mapC)

mapC.set(1,"rollno")

mapC.set({lname:"supriya"},"student")
console.log(mapC)

mapC.set(22,"age")
mapC.set(['phython','css'])
console.log(mapC)
