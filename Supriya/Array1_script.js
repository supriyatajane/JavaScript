//loops

//progam 1
let birthyear=[2001,2007,2003]
let age=[]
for(let i=0;i<birthyear.length;i++)
{
    let cAge=(2022-birthyear[i])
    age.push(cAge)
}
console.log(age)


// program 2
//filter>10

let ageC=[11,20,50,60,3,9,6,8,90]
let above10=[]
for(let i=0;i<ageC.length;i++)
{
    if (ageC[i]>10)
    {
        above10.push(ageC[i])
    }
}
console.log(above10)

//program 3
//sum

let numbers=[5,6,9]
let sum=0
for(let i=0;i<3;i++)
{
    sum=sum+numbers[i]

}
console.log(sum)

//program 4

let city=["Pune","Mumbai","Nagar"]
for(let i=0;i<city.length;i++)
{
    console.log("welcome" +"_"+ city[i])
}

let names=["sujata","pallavi"]

console.log(names[0])

let nn=names.length
console.log(nn)

let mm=names.push("dipa")
console.log(names)
console.log(mm)

let ll=names.pop()
console.log(names)
console.log(ll)

let kk=names.unshift("nayan")
console.log(names)
console.log(kk)

let jj=names.shift()
console.log(names)
console.log(jj)

let hh=names.includes("pallavi")
console.log(hh)

let gg=names.indexOf("sujata")
console.log(gg)
