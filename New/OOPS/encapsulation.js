 // closure
function countNumber(){
    let count = 0
    return function incre(){
        count = count + 1
        console.log(count)
    }
}
let aa = countNumber()
aa()  // 1
aa() // 2
aa()
//console.log(count)

// let  and const 

// {

//     let b = 10
//     let c = 20

// }

// console.log(b)
// console.log(c)



class  Student {

    constructor(){
        // data privacy
        let marks  = 200
        let age  = 23
        this.getMarks = function (){
            this.marks = marks 
            console.log(marks)
        }
        this.getAge= function(){
            this.age = age
            console.log(age)
        }
    }
}

let amol = new Student()
amol.getMarks()
amol.getAge()

console.log(amol.age)

class StudentB {
    constructor(firstName , lastName , age){
        this._firstName = firstName
        this._lastName = lastName
        this._age = age

    }
    getAge(){
        console.log(this._age)
    }
    getFirstName(){
        console.log(this._firstName)
    }
    getLastName(){
        console.log(this._lastName)
    }
}
let amolB = new StudentB("amolB","raoB",23)
//console.log(amolB._firstName)
amolB.getFirstName()

// Abstraction



class Employee {
    constructor(firstName , lastName , age ,basicS){
        this.firstName =  firstName
        this.lastName = lastName
        this.age = age
        this.basicSalary = basicS
        this.bonus = 500

    }
    updatetotalSalary(){
        this.totalSalary = this.basicSalary + this.bonus
    }

    getTotalSalary(){
        console.log(this.totalSalary)
    }
}

let amolC = new Employee("amolC","raoC",12,10000)
amolC.bonus = 50000
amolC.updatetotalSalary = function(){
    this.totalSalary = this.basicSalary + this.bonus + this.basicSalary
}
amolC.updatetotalSalary()
amolC.getTotalSalary()
// solution - use function constructor
 let Employee3 = function (firstName, lastName, age, basicS) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.basicSalary = basicS
    let bonus = 500

    let updateSalary = function(){
        this.totalSalary = this.basicSalary + bonus;
    };
    this.getTotalSalary= function(){
        updateSalary()
        console.log(this.totalSalary)
    };
}
let amolFF = new Employee3("amol","rao",23,4444)
console.log(amolFF.bonus)
amolFF.updateSalary()
// solution - use function constructor
 let Employee4 = function (firstName, lastName, age, basicS) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.basicSalary = basicS
    let bonus = 500

    let updateSalary = function(){
        this.totalSalary = this.basicSalary + bonus;
    };
    this.getTotalSalary= function(){
        updateSalary()
        console.log(this.totalSalary)
    };
}
let amolF = new Employee4("amol","rao",23,4444)
console.log(amolF.bonus)
amolF.updateSalary()