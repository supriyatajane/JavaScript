 // let  x = 10 
// console.log(x)
// // Array
// //            0           1       2  4
// let info = ["chinmay","deshpande",12,44]
// // Add 
// info.push("Marathi")
// info.unshift('Mr')

// // Udpate 
// info[0] = "Kanchan"

// // deleted
// info.pop()
// info.shift()
// info.splice(2,2)

// // retrive
// console.log(info[0])
// // Array stores the value by index 







// Object literal 


// Retrive

// Add 

// Delete 

// Update


let info2  = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:12,
    age:44
}

// retrive
// dot notation and bracket notation

// ObjName.property - dot notation
// Obj['rollNo']  - bracket
console.log(info2.firstName)
console.log(info2['rollNo'])

// Upate (dot notation and bracket notation)
info2.firstName = "tanmay"
info2['age'] = 33
console.log(info2)


// Add  (dot notation and bracket notattion)
info2.firstName = "poorva"
info2.lang = "Marathi"
info2["city"] = "Pune"
console.log(info2)
// delete (dot notation and bracket notation)

delete info2.firstName
delete info2['city']
console.log(info2)

// object3

let vehicle = {
    name:"Audi",
    color:"blue"
}

// dot notation
console.log(vehicle.name)
// update
vehicle.name = "BMW"
// Add
vehicle.type = "sedane"
// Delete
delete vehicle.type
// Bracket notation
// Retrive
console.log(vehicle['name'])
// uddate 
vehicle['name'] = "Audi"
// delete 
delete vehicle['color']

vehicle['type'] = "SUV"


// Array 
let names2 = ["chinmay","sarika","chinmay"]
console.log(names2)


let info3 = {
    fullName:"chinmay deshpande",
    fullName:"poorva vyas"
}
console.log(info3)


// array 


let city = ["pune","mumbai","nagpur"]
for(let i = 0 ; i < city.length ; i++){
    console.log(city[i])
}

let info4 = {
    fullname:"chinmay deshpande",
    age:12,
    skills:["python","javascript"]
}

// dot notation does not work with loop
for(let key in info4){
    console.log(key, info4[key])
}
