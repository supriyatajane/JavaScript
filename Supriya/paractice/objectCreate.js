// object litereal
let person={
    firstname:"diya",
    lastname:"patil",
    skill:["phyhon","java"]
}
for(let key in person)
{
    console.log(key,person[key])
}

// 2nd way to object creation
// setting the property outside the class
class Employee
{
    name=undefined;
    age=undefined;
    skill=undefined

}
let abc=new Employee()
abc.name="supriya"
abc.lastname="tajane"
abc.skill=['phthon','css']
abc.age=13
console.log(abc)

// 3rd way constructor
// contructor are used to set value the object creation
class Employee1
{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
}

let acc=new Employee1("sanika","kadalag",22)
console.log(acc)

// 4th way to set value object
//using set function
class Employee2
{
    setName(name)
    {
        this.name=name
    }
    setAge(age)
    {
        this.age=age
    }
    setCity(city)
    {
        this.city=city
    }
}
let jjj=new Employee2()
jjj.setName="sunil"
jjj.setAge=50
jjj.setCity="sangamaner"
console.log(jjj)