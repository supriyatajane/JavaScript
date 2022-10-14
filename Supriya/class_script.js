
chinmay={
    firstName:" chinmay",
    lastName:"deshpande",
    age:30
}

sarika={
    firstName:"sarika",
    lastName:"pansare",
    age:23
}

//setting the value outside the class
class demo
{
 firstName=undefined
 lastName=undefined
 age=undefined
}
let test=new demo
test.firstName="supriya"
test.lastName="tajane"
test.age=23
console.log(test)


// constructor are used set property to the object creation
class person
{
    constructor(fn,ln,ag)
    {
        this.firstName=fn
        this.lastName=ln
        this.age=ag
    }
}
let paa=new person("devanshi","tajane",34)
let raa=new person("swara","tajane",55)
console.log(paa)
console.log(raa)



// byusing set method
class student
{
    setAge(ag)
    {
        this.age=ag
    }

    setName(na)
    {
        this.name=na
    }
    setSkill(sk)
    {
        this.skill=sk
    }
}
let rrr=new student
console.log(rrr)
rrr.setAge(22)
rrr.setName("rutuja")
rrr.setSkill("java")
console.log(rrr)
