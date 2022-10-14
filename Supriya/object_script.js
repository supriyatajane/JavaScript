let x = 10
console.log(x)

//Array
let info = ["supriya", "tajane", 22, 8]
//add
info.push("marathi")
info.unshift("goa")

console.log(info)

//update
info[0] = "kanchan"
console.log(info)

//deleted
info.pop()
info.shift()
info.splice(2, 2)

console.log(info)
//retrive
console.log(info[0])

//object literal

//retrive
//add
//delete
//update

let info2 = {
    firstName: "supriya",
    lastName: "tajane",
    rollNo: 44,
    age: 23
}

//retrive 
//dot notation,bracket notation
//objName.property-----dot notation
//obj[roll]-----bracket notation
console.log(info2.firstName)
console.log(info2["rollNo"])

//update ---dot notation,bracket notation
info2.firstName = "devanshi"
info2["rollNo"] = 33
console.log(info2)

//add---dot notation,bracket notation
info2.city = "pune"
info2.std = "five"
console.log(info2)

//delete -----dot notation,bracket notation
delete info2.firstName
delete info2["rollNo"]
console.log(info2)

//object 2
let vehicle = {
    name: "venue",
    color: "blue"

}

//dot notation
console.log(vehicle.name)
console.log(vehicle['color'])

//updat
vehicle.name = "BMW"
vehicle["color"] = "Black"
console.log(vehicle)

//add
vehicle.size = "big"
vehicle["type"] = "ss"
console.log(vehicle)

//delete
delete vehicle.name
delete vehicle["color"]
console.log(vehicle)

//array
let names2 = ["Gunjan", "sara", "Gunjan"]
console.log(names2)

let student = {
    firstName: "Gunjan saxsena",
    firstName: "divya gupta"
}
console.log(student)

//array
let city = ["pune", "nagpur", "mumbai"]
for (i = 0; i < city.length; i++) {
    console.log(city[i])

}

let info3 = {
    fullName: "diya sharma",
    age: 33,
    skill: ["python", "java","css"]

}

//dot notation not work with loop
for (let key in info3) {
    console.log(key, info3[key])
}

console.log(info3.skill.length-1)

//console.log(info.skill.length())
// info3.forEach(function(el){
//    console.log(el.skill.length)
// })

