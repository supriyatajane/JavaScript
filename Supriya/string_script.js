let city="pune"
//        0 1 2 3
//        p u n e
console.log(city[0])

//string----object ----method,property
console.log(city.length)

let country="india"
//           0 1 2 3 4  
console.log(country.length)
console.log(country[country.length-1])

//length -1 is always last index
let fruit="strawberry"
for(let i=0;i<fruit.length;i++)
{
    console.log(fruit[i])
}
// method 
//action

// return
let book="java"
let aaaa=book.toUpperCase()
console.log(aaaa)

let book1="PYTHON"
let bbbb=book1.toLowerCase()
console.log(bbbb)

let book2="javascript"
let cccc=book2.includes("pt")
console.log(cccc)

let book3="css"
let dddd=book3.startsWith("cs")
console.log(dddd)

let book4="react"
let eeee=book4.endsWith("ct")
console.log(eeee)

///--------------------//
console.log("------------------------")

let name="supriya"
let lastName="tajane"
let middleName="sunil"
console.log(name,lastName,middleName)

let state="Maharashtra"
console.log(typeof state)
let a=state.toUpperCase()
console.log(a)

let b=state.toLowerCase()
console.log(b)

let firstName="supriya"
let ly=firstName.toUpperCase().toLowerCase().length
console.log(typeof ly)

let c=lastName.startsWith("ta")
console.log(c)

let d=middleName.endsWith("l")
console.log(d)

let e=name.includes("i")
console.log(e)

//trimstart()
let st=" morya"
console.log(st.length)
let ste=st.trimStart()
console.log(ste)
console.log(ste.length)

//trimEnd()
let ts="morya "
console.log(ts.length)
let tse=ts.trimEnd()
console.log(tse)
console.log(tse.length)

//trim()
let sd=" morya "
console.log(sd.length)
let ds=sd.trim()
console.log(ds)
console.log(ds.length)

//
let fruits="grapes"
let h=fruits.indexOf("p")
console.log(h)
let w=fruits.includes("ra")
console.log(w)

//slice

//  0 1  2  3  4 5 6
//  c h  i  n m  a  y 
// -6 -5 -4 -3 -2 -1 

let xyz = "chinmay"
let rrra = xyz.slice(2)
let rrra2 = xyz.slice(2,5)
let rrra3 = xyz.slice(-3)
let rrra4 = xyz.slice(1,-3)
let rrra5 = xyz.slice(-7,-3)
let rrra6 = xyz.slice(-1,-3)
console.log(rrra6)

// array string , object , functions