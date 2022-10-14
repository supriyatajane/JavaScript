//Array method()

//Map()
let ast=[11,34,45]
let aa=ast.map(function(el){
    return el+2
})
console.log(aa)

let bb=ast.map(function(el){
    return el*4
})
console.log(bb)

//2--Array--filter()
let cd=[12,-70,49,-40,80,30,-67,60]
let cc=cd.filter(function(el,index,arr){
    return el>0
})
console.log(cc)

let dd=cd.filter(function(el){
    return el<0
})
console.log(dd)

//3---array---Reduce()
let dc=[12,33,44]
let ee=dc.reduce(function(acc,el){
    return acc+el
})
console.log(ee)

let ff=dc.reduce(function(acc,el){
    return acc-el
})
console.log(ff)

//4--forEach()
let nn=["ram","sham","raj"]
let gg=nn.forEach(function(el){
    console.log("welcome"+" "+el)
})

//Find()
let mm=[22,33,44,55,66,99,70,90]
let hh=mm.find(function(el){
    return el>30
})
console.log(hh)

let hha=mm.findIndex(function(el){
    return el>30
})
console.log(hha)

//every() some()
let rry=[11,22,33,44,77,88,9,4,7]
let ii=rry.every(function(el){
    return el>10
})
console.log(ii)

let iir=rry.some(function(el,index,arr){
    return el>10
})
console.log(iir)

//slice()----start,end
//          0      1       2      3     4   5
let st=["sujata","mayuri","dipa","ram","raj","ravi"]
//       -6        -5      -4      -3   -2   -1

console.log(st.slice(1,4))
console.log(st.slice(2,5))
console.log(st.slice(2))
console.log(st.slice(3))
console.log(st.slice(-4))
console.log(st.slice(1,-4))
console.log(st.slice(2,-1))
console.log(st.slice(-1,-4))
console.log(st.slice(0,4))
