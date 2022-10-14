//object stores the value by key literal
let teacher={
    tname:"amol rahane",
    age:30,
    skill:["python","angular"]
}
//retrive dot notation,bracket notation
console.log(teacher.tname)
console.log(teacher["age"])
//udpate 
teacher.age=88
teacher["skill"]="css"
console.log(teacher)
//add
teacher.hobbies="reading"
teacher["address"]="sagamaner"
console.log(teacher)

// delete 
delete teacher.address
delete teacher["address"]
console.log(teacher)

for(let key in teacher)
{
    console.log(key,teacher[key])
}

// array operation
console.log("------array---opertion-----")
let color=["red","orange","white"]
for(i=0;i<color.length;i++)
{
    console.log(color[i])
}

let qw=color.push("black")
console.log(qw)
console.log(color)

let wq=color.unshift("purple")
console.log(wq)
console.log(color)

let er=color.pop()
console.log(er)
console.log(color)

let re=color.shift()
console.log(re)
console.log(color)

let sp=color.splice(1,2,"black","green")
console.log(sp)
console.log(color)

let ps=color.indexOf("red")
console.log(ps)

let ds=color.reverse()
console.log(ds)

let rt=color.sort()
console.log(rt)

let tr=color.join()
console.log(tr)

console.log("------")

let rtt=[11,22,89,44]

let as=rtt.map(function(el,index,arr){
    return el*2
})
console.log(as)

let fg=rtt.map(function(el,index,arr)
{
    return el-2
})
console.log(fg)
//filter
let hj=rtt.filter(function(el,index,arr){
    return el>10
})
console.log(hj)

//reduce
let jk=rtt.reduce(function(acc,el){
return acc+el
},0)
console.log(jk)
//foreach
rtt.forEach(function(el,index){
    console.log("welcome"+" "+el)
})

//find findindex
let tg=[90,60,40,20,2,4]
let kj=tg.find(function(el,index){
    el<20
})
console.log(kj)

let fd=tg.findIndex(function(el){
    el<20
})
console.log(fd)

let ff=tg.some(function(el,index,arr){
    return el>20
})
console.log(ff)

let kk=tg.every(function(el){
    el>20
})
console.log(kk)

let vc=[22,90,33,99,77]
let rr=tg.concat(vc)
console.log(rr)

let jj=rr.fill("d",1,5)
console.log(jj)

let gf=[[1,2,3],[11,22,33],[90,30,50]]
let hg=gf.flat()
console.log(hg)

console.log(vc.slice(1,2))
console.log(vc.slice(3))

//
console.log("-----while----")
let j=0
while(j<=5)
{
    console.log(j)
    j++
}

//break
let k=0
while(k<=5)
{
    if(k==3)
    {
    break
    }
    console.log(k)
    k++
}
console.log("----continue-----while")
let z=0
while(z<=5)
{
    if(z==2)
    {
        z++
        continue
    }
    console.log(z)
    z++
}

console.log("------for----")
for(let s=0;s<5;s++)
{
    if(s==3)
    {
        break
    }
    console.log(s)
}

for(let r=0;r<5;r++)
{
    if(r==3)
    {
        continue
    }
    console.log(r)
}


// function practice
console.log("---logical progaram")

// progaram1
// count the string vowels(a,e,i,o,u)
let teachers="pOOja".toLowerCase()
count=0
for(i=0;i<teachers.length;i++)
{
if(teachers[i]=='a'||teachers[i]=='e'||teachers[i]=='i'||teachers[i]=='o'||teachers[i]=='u')
{
    count=count+1
}
}
console.log(count) 

//using the function
let namee="AmOl".toLowerCase()
function vowel(word)
{
    count=0
    for(i=0;i<word.length;i++)
    {
        
        if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u')
        {
            count=count+1
        }


    }
    return count
}
let kl=vowel(namee)
console.log(kl)

// reverse
let string="nayann"
let rev=""
for(let i=0;i<string.length;i++)
{
    rev=string[i]+rev
}
console.log(rev)

//2
let string1="poonam"
let rev1=""
for(let i=string1.length-1;i>=0;i--)
{
    rev1=rev1+string1[i]
}
console.log(rev1)


// function practice
function mul(x,y)
{
    return x*y
}
let sd=mul(2,4)
console.log(sd)

// string are immutable becase it cant change single charcter
let n="diya"
n[0]='e'// cant allow
n="riya"
console.log(n)

// function returns array
let qrt=[11,22,33,44]
function sum(demo)
{
    demo[0]=22
    console.log(demo)
}
sum(qrt)

console.log(qrt)

let fir=[8,6,5]
function arryReturn(obj)
{
return obj
}
arryReturn(fir)
console.log(fir)

let gt=[11,22,44,55]
let ls=[33,55,88,90,33]
ls=gt
console.log(ls)
console.log(gt)

//
let srh=[88,55,44]
function sumof(ke)
{
    let mi=ke.reduce(function(acc,el){
        return acc+el
    })
    return mi
}
let rcb=sumof(srh)
console.log(rcb)

// object
let farmer={
    fName:"sunil tajane",
    age:50
}
let farmer1=farmer
console.log(farmer1)
farmer1.age=78
console.log(farmer)

for(let key in farmer)
{
    console.log(key,farmer[key])
}

let doctor={
    dName:"dr.tambe",
    education:"bams",
    age:44

}

function print(obj)
{
    obj.age=90
    console.log(obj)

}
print(doctor)
console.log(doctor)

//
function sub(x,y)
{
    return x-y
}
function demo(objj)
{
    let sa=objj(40,20)
        return sa

    }
let tests=demo(sub)
console.log(tests)

function returntd()
{
    let rd=function()
    {
        console.log("hellow")
    }
    return rd

}
 let kkl=returntd()
 kkl()
 //console.log(rd)