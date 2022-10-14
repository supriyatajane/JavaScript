let fullName="supriya"
let fullName1="supriya1"
let fullName3="supriya2"
console.log(fullName)
console.log(fullName3)

let firstname="Gunjan"
let lastname="jadav"
console.log("my firstname is"+firstname + "my lastname is "+lastname)
// string interpolation string literal
console.log(`my firstname is ${firstname} and my lastname is ${lastname}`)

let a="hello"
let b=22
let d=44
console.log(a+b)
console.log(b+a)
console.log(b+a+d)
console.log(d+b+a)

let student="supriya"
console.log(student[0])
for(let i=0;i<student.length;i++)
{
    console.log(student[student.length-1])
}
let aa=student.toUpperCase()
console.log(aa)

let bb=student.includes("iy")
console.log(bb)

console.log("------string methods---")
// string methods
let city="nagar"
let show=city.toLowerCase()
console.log(show)

let show1=city.toUpperCase()
console.log(show1)

let show3=city.includes('ga')
console.log(show3)

//method chainning
let show4=city.toLowerCase().toUpperCase()
console.log(show4)

let show5=city.toUpperCase().toLowerCase().length
console.log(show5)
console.log(typeof(show5))

//slice method string
//    0  1  2  3   4   5
//    m  o  b  i   l   e
// -6   -5  -4 -3  -2  -1

let name="mobile"
console.log(name.slice(1))
console.log(name.slice(3,4))
console.log(name.slice(-5,-2))
console.log(name.slice(-6,-5))

// trim
let state=" goa "
console.log(state.length)
let tr=state.trim()
console.log(tr)
console.log(tr.length)

//trimstart
let state1=" goa"
console.log(state1.length)
let tr1=state1.trimStart()
console.log(tr1)
console.log(tr1.length)

//trimend
let state2="goa "
console.log(state2.length)
let tr2=state2.trimEnd()
console.log(tr2)
console.log(tr2.length)

let ff=state2.indexOf('g')
console.log(ff)

let rr=state2.lastIndexOf('a')
console.log(rr)

// program1
// count the vowels in string

console.log("-------")
let names="sunil".toLowerCase()
count=0
for(i=0;i<names.length;i++)
{
    if(names[i]=='a'||names[i]=='e'||names[i]=='i'||names[i]=='o'||names[i]=='u')
    {
        count=count+1
    }
}
console.log(count)

//reverse string
let city1="nagar"
let rev=""
for(let i=0;i<city1.length;i++)
{
    rev=city1[i]+rev
}
console.log(rev)

//2 reverse string
let city2="sangamaner"
let rev1=""
for(let i=city2.length-1;i>=0;i--)
{
    rev1=rev1+city2[i]
}
console.log(rev1)

console.log("-----split---------")
// split
let xyz="supriya tajane"
console.log(xyz.split(" "))
let r=(xyz.split(" "))
console.log("welcome" +r[0]+"!")
console.log(xyz.split("e"))
console.log(xyz.split("s"))


// replace
let srt="i am student"
let fff=srt.replace("student","employee")
console.log(fff)

//repeat
let www="supriya".repeat(2)
console.log(www)