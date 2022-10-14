let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        rollNo:12,
        skills:["python","javascript"],
        city:"pune",
        age:32
    },
    {
        firstName:"poorav",
        lastName:"vyas",
        rollNo:13,
        skills:['html','css',"jquery"],
        city:"ujjain",
        age:29
    },
    {
        firstName:"sayli",
        lastName:"deshpande",
        rollNo:26,
        skills:['html','css',"javascript"],
        city:"nagpur",
        age:28
    },

    {
        firstName:"harikesh",
        lastName:"prasad",
        rollNo:34,
        skills:['excel','powerBI',"js"],
        city:"nagpur",
        age:32
    }

]

// search people with nagpur city

students.forEach(function(el){
    if(el.city === 'nagpur'){
        console.log(el.firstName)
    }
})

let a = students.filter(function(el){
    return el.city === "nagpur"
})
//console.log(a)
a.forEach(function(el){
    console.log(el.firstName)
})

//print name of user with numbers of skills
// chinmay:3
students.forEach(function(el){
    console.log(el.firstName,el.skills.length)
})

//person with city nagpur and skills excel

students.forEach(function(el){
    if(el.city === "nagpur" && el.skills.includes('excel')){
        console.log(el.firstName)
    }
})


let r =students.filter(function(el){
    return el.city === "nagpur" && el.skills.includes('excel')
})
//console.log(r[0].firstName)

r.forEach(function(el){
    console.log(el.firstName)
})


//console.log(6 < 7 && 8 === 8)
//console.log(students[1].city)

// avergae age of all students

let totalAge = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(totalAge/students.length)

// student above 30 age

// student with python and javascript

// student who's name starts with "C"

// student name who's firstname has more than 7 character

//problem no1
// student above 30 age
let ww=students.filter(function(el,index,arr){
 return el.age>30
})
ww.forEach(function(el,index,arr){
    console.log(el.firstName)
})

console.log("--------------------")
//problem no2
// student name who's firstname has more than 7 character
students.forEach(function(el,index){
    if(el.firstName.length>7)
    {
console.log(el.firstName)
    }
})

//problem3
// student who's name starts with "C"
students.filter(function(el){
    return(el.firstName.startsWith('c'))
}).forEach(function(el){
    console.log(el.firstName)
})

//problem 4
// student with python and javascript

students.filter(function(el){
    return el.skills.includes('javascript')&&('phython')
}).forEach(function(el){
    console.log(el.firstName)
})

console.log("-----------------------")

let namesay=["pranay","raj","simran","radha"]
// namesay.splice(1,2)
// console.log(namesay)

namesay.splice(1,2,"supriya","rutuja")
console.log(namesay)



