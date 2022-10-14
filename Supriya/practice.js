
// // let mobile=["samsung","lenovo","nokia","oppo","vivo"]
// // for(let i=0;i<mobile.length;i++)
// // {
// //     console.log(mobile[i])
// // }

// // let ab=mobile.push("jio")
// // console.log(mobile)
// // console.log(ab)

// // let ba=mobile.unshift("motrolla")
// // console.log(mobile)
// // console.log(ba)

// // let bc=mobile.pop()
// // console.log(mobile)
// // console.log(bc)

// // let cb=mobile.shift()
// // console.log(mobile)
// // console.log(cb)

// // let cv=mobile.includes("oppo")
// // console.log(cv)

// // let vc=mobile.indexOf("nokia")
// // console.log(vc)

// // let rr=mobile.reverse()
// // console.log(rr)

// // let gf=mobile.sort()
// // console.log(gf)

// // let fg=mobile.join()
// // console.log(fg)

// // //------loop program

// // let age=[1998,1999,2000,2005,2007]
// // let cage=[]
// // for(let i=0;i<age.length;i++)
// // {
// //     let dd=2022-age[i]
// //     cage.push(dd)
// // }
// // console.log(cage)

// // //map
// // let sss=age.map(function(el,index,arr){
// //     return 2022-el
// // })
// // console.log(sss)

// // //filter
// // let no=[12,78,56,30,90,32,22,11,2,3,4,]
// // let above20=[]
// // for(let i=0;i<no.length;i++)
// // {
// //     if(no[i]>20)
// //     above20.push(no[i])
// // }
// // console.log(above20)

// // let cd=no.filter(function(el,index,arr){
// //     return el>20
// // })
// // console.log(cd)

// // let dc=no.filter(function(el,index,arr){
// //  return   el>70
// // })
// // console.log(dc)
// // //reduce

// // let sum=[20,30,40,90]
// // let total=0
// // for(i=0;i<sum.length;i++)
// // {
// //     total=total+sum[i]

// // }
// // console.log(total)

// // let bb=sum.reduce(function(acc,el){
// //     return acc+el
// // },0)

// // console.log(bb)

// // //foreach
// // let player=["rohit","virat","dhoni","shikar","hardik"]
// // for(let i=0;i<player.length;i++)
// // {
// //     console.log("welcome"+" "+player[i])
// // }

// // let ff=player.forEach(function(el){
// //     console.log("hello"+" " +el)
// // })

// // //find
// // let jj=[10,20,60,70,20,30]

// // let kk=jj.find(function(el,index,arr){
// //     return el>40
// // })
// // console.log(kk)

// // let yy=jj.findIndex(function(el,index,arr){
// //     return el>40
// // })
// // console.log(yy)

// // let ss=jj.some(function(el,index,arr){
// //     return el<20
// // })
// // console.log(ss)

// // let hh=jj.every(function(el,index,arr){
// //     return el<20
// // })
// // console.log(hh)
// //     //    0  1  2  3   4  5
// // let ja=[11,22,33,44,66,77]
// // //       -6  -5   -4     -3   -2   -1
// // console.log(ja.slice(1,4))
// // console.log(ja.slice(3))
// // console.log(ja.slice(-5))
// // console.log(ja.slice(-3,-1))
// // console.log(ja.slice(-1,-4))

// // //splice

// // ja.splice(1,2)
// // console.log(ja)

// // //replacement
// // ja.splice(1,2,100,200)
// // console.log(ja)
// // //          0       1      2
// // //         0 1 2   0 1 2  0 1 2
// // let jjj=[[11,12,13],[14,15,16],[17,18,19]]
// // console.log(jjj[0],[0])
// // console.log(jjj[0],[1])
// // console.log(jjj[2],[2])

// // let ddd=jjj.flat()
// // console.log(ddd)

// // let m=[22,33,44,55,66,77,88,99,55,44]
// // let o=m.fill('a',2,5)
// // console.log(o)

// // //function declartion 
// // function mul(x,y)
// // {
// //     return x*y
// // }
// // let n=mul(2,4)
// // console.log(n)

// // //function expression
// // let cc=function(x,y){
// //     return x*y
// // }
// // let n2=cc(2,4)
// // console.log(n2)

// // //arrow function
// // let dd=(x,y)=>{
// //     return x*y
// // }
// // let n3=dd(2,4)
// // console.log(n3)

// // let  nn = [[12,13,14],[222,333,444],[555,666,777]]
// //  console.log(nn[0][0])
// //  console.log(nn[0][2])
// //  console.log(nn[2][2])

// //  let qqq = nn.flat()
// //  console.log(qqq)

// // console.log("-------------------------")

// // let classmates=[
// //     {
// //         name:"gunjan jadav",
// //         city:"pune",
// //         skill:["javascript","c++"],
// //     }
// //     ,
// //     {
// //         name:"devanshi tajane",
// //         city:"ujjain",
// //         skill:["python","html5"]
// //     }
// //     ,
// //     {
// //         name:"mayuri galande",
// //         city:"sagamaner",
// //         skill:["react","css"]
// //     }
// //     ,
// //     {
// //         name:"diya sharma",
// //         city:"ujjain",
// //         skill:["python","htlml5"]
// //     }
// //     ,
// // ]
// // //program 1 change the city pune to nagpur gunjan
// // console.log(classmates[0])
// // classmates[0].city="nagpur"
// // // classmates[0]["city"]="nagpur"
// // // console.log(classmates[0])

// // // //dislay the skills for all
// // // for(let i=0;i<classmates.length;i++)
// // // {
// // //     console.log(classmates[i].name+"."+classmates[i].skill.length)
// // // }

// // // //foreach
// // // classmates.forEach(function(el){
// // //     console.log(el.name+"."+el.skill.length)
// // // })

// // // //name belong to city ujjain
// // // classmates.forEach(function(el){
// // //     if(el.city=="ujjain")
// // //     {
// // //         console.log(el.name)
// // //     }
// // // })

// // // console.log("-------------filter method")
// // // let cityujjain=classmates.filter(function(el){
// // //     return el.city==="ujjain"
// // // })
// // // cityujjain.forEach(function(el){
// // //     console.log(el.name)
// // // })

// // // //person belongs city ujjain knows python

// // // console.log("-----------------")
// // // let kkk=classmates.filter(function(el){
// // //     return el.city=="ujjain"&& el.skill.includes("python")
// // // })

// // // kkk.forEach(function(el){
// // //     console.log(el.name)
// // // })


// // //program 1
// // let age=[2001,2021,2009,1998]
// // let cage=[]
// // for(i=0;i<age.length;i++)
// // {
// //     let c=(2022-age[i])
// //     cage.push(c)
// // }
// // console.log(cage)

// // cage=age.map(function(el){
// //     return 2022-el
// // })
// // console.log(cage)

// // cage=age.map(function(el){
// //     return el*2
// // })
// // console.log(cage)

// // //program 2
// // let no=[10,20,5,6,8,87,34,22,11]
// // let d=[]
// // for(i=0;i<no.length;i++)
// // {
// //     if(no[i]>10)
// //     {

// //         d.push(no[i])
// //     }
    
// // }
// // console.log(d)



// // //filter
// // console.log("----filterr----")
// // d=no.filter(function(el){
// //     return el>10
// // })
// // console.log(d)


// // // progarm 3
// // let sa=[22,33,44]
// // let total=0
// // for(let i=0;i<sa.length;i++)
// // {
// // total=total+sa[i]
// // }
// // console.log(total)

// // total=sa.reduce(function(el,acc){
// // return acc+el
// // },0)
// // console.log(total)

// // // program 4
// // let city=["pune","shimla","nasik"]

// // for(i=0;i<city.length;i++)
// // {
// //     console.log("welcome"+" " +city[i])
// // }

// // let ccc=city.forEach(function(el){
// //     console.log("welcome"+" "+el)
// // })


// // //arrays methods
// // //push pop unshift shift insclude indexof reverse sort join 
// // console.log("----ARRAY-------METODS--------")

// // let hotels=["raj","celebration","green"]
// // for(i=0;i<hotels.length;i++)
// // {
// //     console.log(hotels[i])

// // }

// // let qq=hotels.push("sudhir")
// // console.log(qq)
// // console.log(hotels)

// // //unshift()
// // let ww=hotels.unshift("prasad")
// // console.log(ww)
// // console.log(hotels)
// // //pop()
// // let ee=hotels.pop()
// // console.log(ee)
// // console.log(hotels)
// // //shift()
// // let rr=hotels.shift()
// // console.log(rr)
// // console.log(hotels)
// // //include
// // let tt=hotels.includes("green")
// // console.log(tt)

// // let yy=hotels.indexOf("raj")
// // console.log(yy)
// // console.log(hotels)

// // let uu=hotels.reverse()
// // console.log(uu)

// // let ii=hotels.sort()
// // console.log(ii)

// // let name=["supriya","sunil","tajane"]
// //   let oo=name.join()
// //   console.log(oo)

// // console.log("-------------")
// //   //map filter reduce foreach find findindex some every 

// //   let num=[1,33,54,5,6,88,99,77,55,40,22,2,]
// //   let pp=num.map(function(el,index,arr){
// //       return el+2
// //   })
// //   console.log(pp)

// //   let aa=num.map(function(el,index,arr){
// //       return el*30
// //   })
// //   console.log(aa)
// // //filter 
// // let ss=num.filter(function(el,index,arr){
// //     return el>30
// // })
// // console.log(ss)

// // let dd=num.filter(function(el,index,arr){
// //     return el<10
// // })
// // console.log(dd)
// // //reduce
// // let ff=num.reduce(function(acc,el,index,arr){
// //     return acc+el
// // },0)
// // console.log(ff)

// // let gg=num.reduce(function(acc,el,index,arr){
// //     return acc-el
// // },0)
// // console.log(gg)

// // let jj=num.forEach(function(el,index,arr){
// //     console.log("welcome"+" "+el)
// // })

// // let mobile=["samsung","oppo","vivo"]
// // let hh=mobile.forEach(function(el,index,arr){
//     console.log("welcome"+" "+el)
// //})
// //find findindex,find ,every ,some
// let numm=[10,20,30,40,60,4]
// let kk=numm.find(function(el,index,arr){
//     return el>10
// })
// console.log(kk)

// let ll=numm.findIndex(function(el,index,arr){
// return el>10
// })
// console.log(ll)

// let zz=numm.some(function(el,index,arr){
//     return el<10
// })
// console.log(zz)

// let xx=numm.every(function(el,index,arr){
//     return el>10
// })
// console.log(xx)

// //         0 1    2  3  4  5
// let nummm=[10,20,30,40,60,4]
// //         -6 -5 -4 -3 -2 -1
// console.log(nummm.slice(2))
// console.log(nummm.slice(2,4))
// console.log(nummm.slice(-6,-3))
// console.log(nummm.slice  (-3,-6))
// console.log(nummm.slice(5,3))

// let cc=nummm.splice(1,2,"supriya","rutuja")
// console.log(cc)
// console.log(nummm)


// let vv=nummm.fill(11,4,5)
// console.log(vv)

// console.log("---------")
//  let markss=90
// if(markss>=90)
// {
//     console.log("you got a grade")
// } 
// if(markss>60 && markss<90)
// {
//     console.log("you got b grade")

// }
// if(markss>50 && markss<60)
// {
//     console.log("you got c grade")
// }

// // object
// console.log("----object-------")

// let persons=[
//     {
//         fullName:"supriya tajane",
//         age:22,
//         skill:["python","css"],
//         city:"sangamaner"

//     }
    
// ]
// //for(let key in persons)
// //{
//   //  console.log(key,persons[key])
// //}
// console.log(persons.fullName)
// console.log(persons["skill"])
// //update
// persons.age=12
// //add
// persons.lang="Marathi"
// persons["state"]="maharashtra"
// console.log(persons)
// //push
// // persons.skill.push("java")
// // persons["skill"].push("cpp")
// // console.log(person)

// //delete
// delete persons.lang
// console.log(persons)

// //display the skill user
// for(let i=0;i<persons.length;i++){
//     console.log(persons[i].fullName+":"+persons[i].skill.length)
// }
// //foreach method
// persons.forEach(function(el,index,arr){
//     console.log(el.fullName+" "+el.skill.length)
// })

// //
// persons.forEach(function(el,index,arr){
//     if(el.city=="sangamaner")
//     {
//      console.log(el.fullName)
//     }
// })

// console.log("----------")
// let cityarr=persons.filter(function(el,index,arr){
//     return(el.city=="sangamaner")
// })
// cityarr.forEach(function(el,index,arr){
//     console.log(el.fullName)
// })

console.log("----------")
// array
let ff=[22,33,44]
function sumof(arr)
{
    arr[0]=99
    console.log(arr)
}
console.log(ff)
sumof(ff)
console.log(ff)

// function as parameter to another function
function addd(x,y)
{
    return x+y
}
function someThing(obj)
{
    let rr=obj(20,40)
    return rr
}
let vvv=someThing(addd)
console.log(vvv)
//function return
function test()
{
    let ggg=function(){
    console.log("hello")
    }
    return ggg
}
let jj=test()
jj()

console.log("----------")
function counvoe(word)
{
    count=0
    for(i=0;i<word.length;i++)
    {
        word[i]=word[i].toLowerCase()
        if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u")
        {
         count=count+1
        }
}
return count
}
let cdd=counvoe("devanshi")
console.log(cdd)

//array 
let kl=[22,88,77]
function multi(fun)
{
    let run=fun.reduce(function(acc,el){
        return acc+el
    })
    return run
}
let vv=multi(kl)

console.log(vv)

let emp={
    empname:"dipika",
    age:22,
    desg:"manager"

}

let emp1=emp
emp1.skill=["python"]
console.log(emp1)
console.log(emp)

function print(obj)
{
for(let key in obj)
{
    console.log(key,obj[key])
}
}
print(emp1)
