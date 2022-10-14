let event=["marriage","engagement","birthday"]
//destructing array
let [aa,bb,cc]=event
console.log(aa)
console.log(bb)
console.log(cc)

//object destructing
let college={
    name:"pune university",
    city:"pune"
}

let {name:na,city:ci}=college
console.log(na)
console.log(ci)

console.log("----------")
let college1={
    name:"mit college",
    city:"mumbai",
    subject:["it","electrical"]
}

let {name:n,city:c,subject:[sss,ppp]}=college1
console.log(sss)
console.log(ppp)

console.log("-----------")

let college3={
    student1:{
name:"abhijit tajane",
age:22
},
student2:{
name:"harshal galande",
age:12
}
}
let {student1:{name:nam,age:ag},student2:{name:nam1,age:ag1}}=college3
console.log(nam)
console.log(ag)
console.log(nam1)
console.log(ag1)

let tree=[["mango","papaya"],["banana","strawberry"]]

let [[nn,mm],[jj,kk]]=tree
console.log(nn)
console.log(mm)
console.log(jj)
console.log(kk)

let state={
    villege:{
        vname:"akole",
        vpin:422601
    },
    villege1:{
        vname1:"sakur",
        vpin:422605
    }

}
let{villege:{vname:vn,vpin:vp},villege1:{vname1:vn1,vpin:vp1}}=state
console.log(vn)
console.log(vp)
console.log(vn1)
console.log(vp1)

// spread opreator and rest operator
function add(...arr)
{
    let jk=arr.reduce(function(acc,el){
        return acc+el
    },0)
    return jk
}
let hg=add(11,22,33,44,55,66,77,88,99,89)
console.log(hg)

function mul(...obj)
{
    let lk=obj.reduce(function(acc,el){
        return acc*el
    })
    return lk
}
let wq=mul(11,22,33)
console.log(wq)

console.log("------")
function rest(...srr)
{
    let yh=srr.map(function(el,index){
        return el*2
    })
    return yh
}
let fg=rest(12,22,33)
console.log(fg)

// // spread operator
// let gf=[30,45,67,89,88,40,56]
// function spread(.a,...aaa)
// {
//     let dd=aaa.filter(function(el,index){
//         return el>a
//     })
//     return dd
// }
// let rrr=spread(gf(...a,..a))
// console.log(rrr)
let number=[1,2,3]
function sum(x,y,z)
{
    return x+y+z
}
console.log(sum(...number))