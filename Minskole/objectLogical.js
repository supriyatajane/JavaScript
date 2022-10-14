let students = [

    {
        fullName:"chinmay deshpande",
        age:33,
        skills:['python','javascript',"selenium",'cypress'],
        city:"pune",
        family:{
            father:"shirish",
            mother:"kanchan",
            sister:"gauri"
        }
       

    },
    {
        fullName:"poorva vyas",
        age:28,
        skills:['angular','node',"cypress",'react js'],
        city:"ujjain",
        family:{
            father:"vikas",
            mother:"vaishali",
            sister:"nivya",
            brother:"rohit"
        }
       

    },
    {
        fullName:"amol rao",
        age:32,
        skills:['sql','msbi',"linux",'react js','python'],
        city:"nagpur",
        family:{
            father:"dilip",
            mother:"vanita",
            sister:"mayuri",
            brother:"nilesh"
        }

    },
    {

        fullName:"rasika kulkarni",
        age:31,
        skills:['javascript','jquery'],
        city:"nagpur",
        family:{
            father:"amit",
            mother:"abhisha",
            sister:"devyani",
            brother:"nikhil"
        }

    }


]

// print fullName and city 

students.forEach(function(el){
    console.log(el.fullName , el.city)
})

// fullname with number of skills 

students.forEach(function(el){
    console.log(el.fullName , el.skills.length)
})

// user belongs to nagpur city

students.forEach(function(el){
    if(el.city == "nagpur"){
        console.log(el.fullName)
    }
})

//user belongs to nagpur city

students.filter(function(el){
    return el.city == "nagpur"
}).forEach(function(el){
    console.log(el.fullName)
})


// average age of all users

console.log(students.reduce(function(acc,el){
    return acc + el.age
},0)/students.length)


// pune || nagpur || python  user with python skills and should belong to nagpur or pune city

students.filter(function(el){
    return el.city == "pune" || el.city == 'nagpur' && el.skills.includes('python')
}).forEach(function(el){
    console.log(el.fullName)
})

// name of user with count of family members 

students.forEach(function(el){
    let count = 0 
    for(let key in el.family){
        count = count + 1
    }
    console.log(el.fullName +" "+ count)
})



// max


let max = 0 
let user ;

// students.forEach(function(el){
//     if(el.age > max){
//         max = el.age
//         user = el.fullName
//     }
// })

// console.log(user)


// let rrr = students.map(function(el){
//     return el.age 
// }).sort()
// let maxa =  rrr[rrr.length-1]

// console.log(students.find(function(el){
//     return el.age  == maxa
// }).fullName)


















//[{},{}]















//console.log(students[0].fullName , students[0].city)