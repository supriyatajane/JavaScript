//program One

let ages=[11,22,33]
let birthyear=[]
for(let i=0;i<ages.length;i++)
{
    let age=2022-ages[i]
birthyear.push(age)
}
console.log(birthyear)

//map
let aaa=ages.map(function(el){
    return 2022-el
})
console.log(aaa)

let by=[90,80,70]
let bbb=by.map(function (el){
    return el+2
})
console.log(bbb)

let ggg=by.map(function(el){
    return el+10
})
console.log(ggg)

//program Two

//above 20
let numbers=[20,30,70,2,5,21,15,9]
let above20=[]
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]>20)
    above20.push(numbers[i])

}
console.log(above20)

//array-filter()
let ccc=numbers.filter(function(el,index,arr){
    return el>20
})
console.log(ccc)

let bn=[90,60,40,78,20]
let ddd=bn.filter(function (el,index,arr){
    return el>50
})
console.log(ddd)

let rrr=bn.filter(function(el){
    return el<40
})
console.log(rrr)


//progaram 3
//sum
let su=[20,10,40]
let total=0
for(i=0;i<su.length;i++)
{
    total=total+su[i]

}
console.log(total)

//reduce
let eee=su.reduce(function(acc,el){
    return el+acc
})
console.log(eee)

let jj=[45,34,67]
let yy=jj.reduce(function(acc,el){
return el+acc
})
console.log(yy)

//program 4
let city=["manali","shimla","goa"]
for(let i=0;i<city.length;i++)
{
    console.log("welcome"+"-"+city[i])

}

//forEach()
let tt=city.forEach(function(el){
    console.log("welcome"+" "+el)

})


let mmm=city.forEach(function(el){
    console.log("Hiii"+el)
})