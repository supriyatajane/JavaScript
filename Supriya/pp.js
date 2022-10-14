let str=('supriya','sunil','tajane')
let dd=str.split("")
console.log(dd)

// count the vowels
let name ="supriyA".toLocaleLowerCase()

function count(word)
{
    count=0
    //word.toLowercase()
    for(i=0;i<word.length;i++)
    {
        
        if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u')
        {
            
            count=count+1
        }
    }
    return count
}
let rr=count(name)
console.log(rr)

//sort
let arr=[0,0,1,-1,1,0,1,-1]
let b=arr.sort()
console.log(b)

//number
let no=[11,22,'88','99','raya']
let ds=no.filter(function(el,index){
    return Number(el)
})
console.log(ds)

console.log("--------------")
//reverse
let city3="mumbai"
let rev=""
for(i=city3.length-1;i>=0;i--)
{
    rev=rev+city3[i]
}

console.log(rev)


let city2="sangamaner"
let rev1=""
for(let i=city2.length-1;i>=0;i--)
{
    rev1=rev1+city2[i]
}
console.log(rev1)

// object
console.log("---------object--------------")

let employee=[
    {
        firstname:"sarika",
        lastName:"pansare"
    },
    {
        firstname:"rutuja",
        lastname:"varpe"

}
]

console.log(employee[0].firstname)
console.log(employee[1].firstname)

console.log(employee[0].city="pune")
console.log(employee[1].city="mumbai")

for(let key in employee)
{
    console.log(key,employee[key])
}
