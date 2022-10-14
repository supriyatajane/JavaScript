 // function Es6 class

let Person =  function(fn,age,rolNo){
    this.fullName = fn 
    this.age = age
    this.rolNo = rolNo
}
Person.prototype.displayName = function(){
    console.log(this.fullName)
}
let amol = new Person("amol rao",12,23)
console.log(amol)
console.log(amol.age)
console.log(amol['age'])
amol.displayName()
// amol.age = 34
// amol.lang = "Hindi"
// amol.age
// delete amol.age
// Es6 class
console.log(amol)
class Person2 {
    constructor(fn,age,rollNo){
        this.fullName = fn 
        this.age = age 
        this.rollNo = rollNo
    }
    displayName(){
        console.log(this.fullName)
    }

}
let amol2 = new Person2("amol rao",12,23)
console.log(amol2)

// Es6 
class Vehicle {
    color = undefined
    regNo = undefined
    city = undefined
}

let audi = new Vehicle()
console.log(audi)

audi.color = "red"
audi.regNo = 123
audi.city = "pune"

// using constructor


class Vehicle2 {
    constructor(color,regNo,city){
        this.color = color
        this.city = city
        this.regNo = regNo
    }
}

let bwm = new Vehicle2("black",123,"pune")
console.log(bwm)

// set method

class Vehicle3 {
    setColor(cl){
        this.color = cl
    }

    setReg(rg){
        this.rg = rg
    }

    setCity(city){
        this.city = city 
    }

}

let maruti = new Vehicle3()
console.log(maruti)
maruti.setCity("pune")
maruti.setColor("red")
maruti.setReg(123)
console.log(maruti)

// Es6 

// Encapsulation 

// Inheritance 

// Polymorphism 
// Abstraction // Interface -- typescript
class Bank {
    constructor(accName, accNo , city , bal){
        this.accName = accName
        this.accNo = accNo
        this.city = city
        this.bal = bal
        this.transaction = []
    }
    depoist(amount){
        this.bal = this.bal + amount 
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount){
        if(this.bal > amount){
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('insufficent bal')
        }
    }

    lastFiveTransaction(){
        console.log(this.transaction.slice(-5))
    }

}

let chinmay = new Bank("chinmay deshpande",123,"pune",100000000)
console.log(chinmay)
chinmay.withdrawl(10000000)
chinmay.depoist(1999)
chinmay.withdrawl(10000)
chinmay.depoist(1999)
chinmay.withdrawl(10000)
chinmay.depoist(1999)
chinmay.withdrawl(10000)
chinmay.depoist(1999)
chinmay.withdrawl(1000)
chinmay.depoist(199)
chinmay.lastFiveTransaction()

































// let audi2 = {
//     color:"red",
//     regNo:123,
//     city:"pune"

// }





























// let r = console.log()
// console.log(r)