// function constructor 
let Person = function(age,fullName, rollNumber){
    this.age = age
    this.fullName = fullName
    this.rollNumber = rollNumber
    // this.display = function(){
    //     console.log(this.fullName)
    // }
    
}

Person.prototype.display = function(){
    console.log(this.fullName)
}

let amol = new Person("12","chinmay",23)
amol.display()

// Es6 class 

class Person2 {
    constructor(age,fullName,rollNumber){
        this.age = age 
        this.fullName = fullName
        this.rollNumber = rollNumber
    }
    display(){
        console.log(this.fullName)
    }
}

let amol2 = new Person2("12","amol rao",23)
console.log(amol)
console.log(amol2)

// program 

// Setting the property of current calling object 
// out of class 


class Vehicle {

    color = undefined
    regNo = undefined
    type = undefined


}

let audi = new Vehicle()
console.log(audi)
audi.color = "red"
audi.regNo = 123
audi.type = "sedande"

// object 

let audi5 = {
    color:"black",
    regNo:123,
    type:"SUV"

}

// Setting the property at the time object creation

class Vehicle3 {
    constructor(cl,regN ,type){
        this.color = cl,
        this.regN = regN,
        this.type = type
    }
}

let audi3 = new Vehicle3("blue",123,"SUV")
let audi4 = new Vehicle3("blue",123,"sedance")

console.log(audi3)
console.log(audi4)

// Object creation using set method

class Vehicle4 {
    setColor(cl){
        this.color = cl
    }

    setRegNo(reg){
        this.regNo = reg
    }

    setType(type){
        this.type = type
    }
}

let audi6 = new  Vehicle4()
console.log(audi6)
audi6.setColor('green')
audi6.setRegNo('133')
audi6.setType('sedane')
console.log(audi6)

//----------------------------------/

class Bank {
    constructor(accName,accNo,city,bal ){
        this.accName = accName,
        this.accNo = accNo
        this.city = city
        this.bal = bal
        this.transaction = []
    }

    depoist(amount){
        this.bal = this.bal + amount
        this.transaction.push(amount)
        console.log('The update bal is '+this.bal)
        return this.bal

    }

    withdrawl(amount){
        if(this.bal > amount){
            this.transaction.push(-amount)
            this.bal= this.bal - amount
            console.log('The update bal is '+this.bal)
            return this.bal
        }
        else {
            console.log('Insufficient amount')
        }

    }

    lastFivetransaction(){
        console.log(this.transaction.slice(-5))
    }
}

let ram = new Bank("ram",123,"pune",1000)
console.log(ram)
//ram.withdrawl(2000)
ram.withdrawl(500)
ram.depoist(5000)
ram.withdrawl(5)
ram.depoist(5)
ram.withdrawl(56)
ram.depoist(566)
ram.withdrawl(500)
ram.depoist(5000)
ram.withdrawl(500)
ram.depoist(5000)
ram.lastFivetransaction()

// class 8 pm evening