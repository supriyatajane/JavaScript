let a=[11,22,33,44,55]

let aa=a.map(function(el,index){
    return el+2
})
console.log(aa)

let bb=a.map(function(el,index){
    return el*2
})
console.log(bb)

//filter
let cc=a.filter(function(el,index){
    return el>20
})
console.log(cc)

//reduce
let dd=a.reduce(function(acc,el,index){
return acc+el
},5)
console.log(dd)

//foreach
stud=["poonam","rutuja","supriya"]
stud.forEach(function(el,index){
    console.log(`hii ${el}`)
})

//some() every()
let no=[12,20,70,56,78]
let ff=no.some(function(el,index,arr){
    return el>10
})
console.log(ff)
//every()
let gg=no.every(function(el,index,arr){
    return el>70
})
console.log(gg)

//find()
let hh=no.find(function(el,index,arr){
   return el>60
})
console.log(hh)

//findIndex()
let jj=no.findIndex(function(el,index,arr){
    return el>60
})
console.log(jj)

//reverse()
let names=["ram","shyam","diya","samira","riya"]
let kk=names.reverse()
console.log(kk)
//
// map()
//even odd
let ars=[11,22,33,44,55,66,77,88,99]
let ooo=ars.map(function(el,index,arr){
    if(el%2===0)
    {
        return `even ${el}`
    }
    else{
        return `odd ${el}`
    }
})
console.log(ooo)

//filter()
let even=ars.filter(function(el,index){
    return(el%2==0)
})
console.log(even)

let odd=ars.filter(function(el,index){
    return(el%2!==0)

})
console.log(odd)

