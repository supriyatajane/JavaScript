let person={
    fullName:"supriya",
    lastName:"tajane",
    age:22,
    skill:['css','phthon','ss']
}


console.log(person.skill[length-1])

//retrive
console.log(person.fullName)

//bracket 
console.log(person['lastName'])
console.log(person['age'])

//upadte

console.log(person.fullName="sana")

console.log(person["age"]=29)

//delete

delete person.fullName
delete person['age']

console.log(person)

//add
person.fullName="sarika"
person.age=22

console.log(person)

//function contructor
let Employee=function(fn,ln,ag)
{
    this.fn=fn
    this.ln=ln
    this.ag
}
let sara=new Employee('sara','khan',22)
let diya=new Employee('samira','patel',44)
console.log(sara)
console.log(diya)
 diya.lang="english"
 console.log(diya)