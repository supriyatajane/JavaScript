let person={
    fullname:"Supriya",
    age:15,
    skill:["python","java"],
    city: "Mumbai"
}

//retrive
console.log(person.fullname)
console.log(person["skill"])
//update
person.age=12
person["age"]=23
//add
person.lang="marathi"
person["lang"]="english"
//add skill in array
person.skill.push("html")
person["skill"].push="html"
console.log(person)

//delete
delete person.lang
delete person["city"]
//console.log(person)

 person={
    firstname:"supriya",
    age:14,
    skill:["python","java"],
    city:"mumbai"
}

for(let key in person){
    console.log(key,person[key])
}
//------------------//


let students=[
    {
        fullname:"supriya tajane",
        city:"pune",
        skill:["html","css","javascript"]
    }
    ,
    {
        fullname:"sarika pansare",
        city:"jaipur",
        skill:["html5","python"]
    }
    ,
    {
        fullname:"mayuri rasal",
        city:"ujjain",
        skill:["html","javascipt3","html5"]
    }
    ,
    {
        fullname:"sujat hase",
        city:"ujjain",
        skill:["html5","python"]
    }
]

//problem1 change the city pune to nagpur supriya
console.log(students[0])
students[0].city="nagpur"
students[0]["city"]="nagpur"

//display the skill all user
for(let i=0;i<students.length;i++)
{
    console.log(students[i].fullname+":"+students[i].skill.length)
}
console.log("\n\n")

//forEach()
students.forEach(function(el){
    console.log(el.fullname+":"+el.skill.length)
})
console.log("\n\n")

//name of person belong to city ujjain
students.forEach(function(el){
    if(el.city=="ujjain"){
    console.log(el.fullname)
    }
})

let cityUjjainArray=students.filter(function(el){
    return el.city==="ujjain"
})

cityUjjainArray.forEach(function(el){
    console.log(el.fullname)
})
//person belongs ujjain knows python
let rr=students.filter(function(el){
    return el.city=="ujjain" && el.skill.includes("python")
})
rr.forEach(function(el){
    console.log(el.fullname)
})