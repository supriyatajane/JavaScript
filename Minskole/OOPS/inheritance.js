// program one
class GrandFather {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    display(){
        console.log(this.firstName +" "+this.lastName)
    }
}

class Father extends  GrandFather {

    greet(){
        console.log('Hello')
    }
   
} 

// let shirish = new Father("manohar","deshpande")
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.display()
// shirish.greet()




// let manohar = new GrandFather('manohar','deshpande')
// console.log(manohar)
// manohar.display()
// //manohar.greet() it will not work



// program 2

class GrandFather2 {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName +" "+this.lastName)
    }
}

class Father2 extends  GrandFather2 {
    constructor(gFatherName,lastName,fFirstName){
        super(gFatherName,lastName)
        this.ffirstName = fFirstName
    }
    display(){
        console.log(this.ffirstName + this.lastName)
        super.display()
    }
   
} 

console.log("-------------")
let shirish2 = new Father2("manohar","deshpande","shirish")
console.log(shirish2.firstName)
console.log(shirish2.ffirstName)
console.log(shirish2.lastName)
//console.log(shirish2.gFatherName)

shirish2.display()


// program 3



class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + " "+ this.lastName)
    }
}

class Teacher extends Student {

    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }

}
class Professor extends Teacher {

    constructor(fn,ln,salary,spec){
        super(fn,ln,salary)
        this.spec = spec

    }

    displaySpec(){
        console.log(this.spec)
    }

}
let ninad = new Professor("ninad","dani",12233,"hindi")
console.log(ninad.spec)
console.log(ninad.salary)
console.log(ninad.firstName)
console.log(ninad.lastName)

ninad.displayName()
ninad.displaySalary()
ninad.displaySpec()