let students = [

    {
        fullName:"supriya tajane",
        age:33,
        skills:['python','javascript',"selenium",'cypress'],
        city:"pune",
        family:{
            father:"sunil",
            mother:"alka",
            brother:"abhijit"
        }
       

    },
    {
        fullName:"devanshi ghule",
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
        fullName:"amol rahane",
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

        fullName:"sapna shrema",
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
// progarm 1
//print fullname and city
students.forEach(function(el){
    console.log(el.fullName+" "+el.city)
})

console.log("---------------- skill---------------------------")
//program2
//fullname with skilll
students.forEach(function(el){
    console.log(el.fullName+" "+el.skills.length)
})


console.log("------------------city nagpur user-------------------------")
//user belong to nagpur city
// progaram 3
students.forEach(function(el){
    if(el.city=="nagpur")
    {
        console.log(el.fullName)
    }
})

//user belongs to nagpur city using filter method
//program 4
students.filter(function(el){
    return(el.city=="nagpur")
}).forEach(function(el){
    console.log(el.fullName)
})

console.log("---------------------average age------------------")

//average age all user
//progarm 5
console.log(students.reduce(function(acc,el){
    return acc+el.age
},0)/students.length)

// pune or nagpur city usen knows phthon skill
// program 5
students.forEach(function(el){
    if(el.city=="nagpur"||"pune"&& el.skills.includes("python"))
    {
console.log(el.fullName)
    }
})

// using filter
students.filter(function(el){
    return el.city=="nagpur"||"pune"&& el.skills.includes('python')
}).forEach(function(el){
    console.log(el.fullName)
})

// name of user count family member
//program 6
students.forEach(function(el){
    count=0
    for(let key in el.family)
    {
        count=count+1
    }
    console.log(el.fullName+" "+count)
})

//maximum aGE OF USER
// program 7
let max=0
let user;
students.forEach(function(el){
    if(el.age>max)
    {
        max=el.age
        user=el.fullName
    }
    
})
console.log(user+" "+max)

let rrr=students.map(function(el){
    return el.age
}).sort()
let maxa=rrr[rrr.length-1]

console.log(students.find(function(el){
        return el.age  == maxa
    }).fullName)
    
