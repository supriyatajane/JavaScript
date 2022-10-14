// es6 destructing
// array 
let names=["arya","diya","siya"]
let[aa,bb,cc ]=names
console.log(aa)
console.log(bb)
console.log(cc)

let[ss, ,pp]=names
console.log(pp)

console.log("--------------------------------")
//progaram 2
// multiple array destructing
let cityy=[["sangamaner","nagar"],"rajur","sakur"]
let[[aaa,bbb],ccc,ddd]=cityy
console.log(ccc)
console.log(bbb)

let[rrr,sss,kkk]=cityy
console.log(kkk)
console.log(rrr)

// replace
let a=10
let b=20
let temp;

temp=a
a=b
b=temp
console.log(a)
console.log(b)

//
let x=40;
let y=90;
[x,y]=[y,x]
console.log(x)
console.log(y)

console.log("----------------------object-------------------------")
// object destructing
//1 single object
let person={
    firstName:"vishal",
    lastName:"patil"
}
let{firstName:fn,lastName:ln}=person
console.log(fn)
console.log(ln)

//combination object
let emp=[
    {
        firstName:"surya",
        lastName:"kumar"
    },
    {
        firstName:"rohit",
        lastName:"sharma"
    }
]

let[{firstName:fm,lastName:lm},{firstName:fm1,lastName:lm1}]=emp

console.log(fm)
console.log(lm)
console.log(fm1)
console.log(lm1)


// object array
let demo={
    salary:[11,22,33],
    salary1:[2000,3000,4000]
}

let {salary:[zz,yy,xx],salary1:[hh,gg,nn]}=demo
console.log(zz)
console.log(yy)
console.log(xx)

console.log(hh)
console.log(gg)
console.log(nn)

//
let obj={
    person:{
        fm:"ss",
        lm:"pp"
    }
}
let {person:{fm:s,lm:g}}=obj
console.log(s)
console.log(g)