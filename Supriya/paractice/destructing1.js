// function
// function declaration
function mul(x,y)
{
    return(x*y)
}
let dd=mul(2,4)
console.log(dd)

// function expression
let mul1=function(x,y)
{
    return(x*y)
}
let cc=mul(2,3)
console.log(cc)
console.log(cc*2)

// arrow function
let mul3=(x,y)=>
{
    return(x*y)
}
let kk=mul3(1,3)
console.log(kk)

// array destructing
let city=['pune','nasik','mumbai']

let [aa,bb,c]=city
console.log(aa)
//multiple array detructing
let number=[[1,2,3],[4,5,6],[7,8,9]]
let [[xx,yy,zz],[jj,ss,ll],[pp,uu,ii]]=number
console.log(xx)
console.log(ii)

// object detructing

let person={
    firstname:"diya",
    lastname:"kapoor"

}

let{firstname,lastname }=person
console.log(firstname)
console.log(lastname)

//array inside the object
let employee=[
    {
        firstname:"ram",
        lastname:"jadav"
    },
    {
        firstname:"shyam",
        lastname:"jadav"
    }
]

let [{firstname:fm,lastname:fmm},{firstname:fam1,lastname:fm2}]=employee
console.log(fm)
console.log(fmm)
console.log(fam1)
console.log(fm2)

// object inside array
let emp={
    skill:["phython","java","jira"],
    no:[11,22,33,44,55]
}

let {skill:[a,b,u],no:[s,p,l,o,k]}=emp
console.log(a)
console.log(b)
console.log(k)

// object inside object
let students={
    sarika:{
        lastname:"pansare"
    },
    supriya:{
        lastname:"tajane"

    }


}
let {sarika:{lastname:ln},supriya:{lastname:ln2}}=students
console.log(ln)
console.log(ln2)