//es6 class
class Person {

    firstName=undefined
    lastName= undefined
    rollNo=undefined
    age = undefined

    display(){
        console.log(this.firstName + this.lastName)
    }

}

let pp=new Person()
pp.firstName="supriya"
pp.lastName='tajane'
pp.rollNo=22
pp.age=33

console.log(pp)
pp.display()

//constructor
//object creation setting the values
class Person2{
    constructor(firstName,lastName,age,rollNo)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.rollNo=rollNo
    }
    display()
    {
        console.log(this.firstName+this.lastName)
    }
}
let supriya=new Person2('supriya','tajane',22,34)
let sana=new Person2('sana','pathan',33,44)
