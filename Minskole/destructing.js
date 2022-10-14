//             0          1       2         3
let names = ["chinmay","samay","samarth","sunil"]
let [aaa,bbb] = names
console.log(aaa)
console.log(bbb)

// object

let obj = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

// let {firstName,lastName,age} = obj
// console.log(firstName)
// console.log(lastName)
// console.log(age)

let {firstName:fn,lastName:ln,age:ag} = obj
console.log(fn)
console.log(ln)
console.log(ag)
//------------------------------------------------/

let qwerty = {

    firstName:"chinmay",
    lastName:"deshpande",
    skills:["python","java"]

}
let {firstName:fna,lastName:lna,skills:[aaaa,bbbb]} = qwerty
console.log(aaaa)
console.log(bbbb)
console.log(fna)
console.log(lna)

let asd = [["pune","nagpur"],["indore","bhopal"]]
let [[q,z],[n,m]] = asd
console.log(q)
console.log(z)
console.log(n)
console.log(m)
let country = {
    userone:{
        firstName:"a",
        lastName:"z"
    },

    usertwo:{
        firstName:"s",
        lastName:"l"
    }
}

let {userone:{firstName:f1,lastName:l1},usertwo:{firstName:f2,lastName:l2}} = country
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)
let vehicles = [
    {
        type:"sedane",
        color:"blue",
        company:"audi"
    },

    {
        type:"audi",
        color:"red",
        company:"bmw"
    }
]

let [{type:t1,color:c1,company:co1},{type:t2,color:c2,company:co2}] = vehicles
console.log(t1)
console.log(co2)

// spread operator and rest operator 


function add(...arr){
    //console.log(arr)
    let qwert =arr.reduce(function(acc,el){
        return acc + el
    },0)

    return qwert
}

let qwertya = add(1,2,2,3,4,5,6,6,7,8,9,3,4)
console.log(qwertya)


//  12,3,4,4,5  ====> [12,3,4,4,5]