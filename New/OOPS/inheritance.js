 // // Inheritance -- repetation --- class -- design 

// // Encapsulation 

// // Inheritance  ???

// class Grandfather{
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }


// class Father extends Grandfather {
//     constructor(gfname,lastName,fName){
//         super(gfname,lastName)
//         this.fName = fName
//     }

//     display(){
//         console.log(this.fName + this.lastName)
//         super.display()
//     }

// }

// class Son extends Father {

//     constructor(gfname,lastName,fName,sname){
//         super(gfname,lastName,fName)
//         this.sname = sname
//     }

//     display(){
//         console.log(this.sname + this.lastName)
//         super.display()
//     }

// }


// let chinmay = new Son("manohar","deshpande","shirish","chinmay")

// console.log(chinmay.lastName)
// console.log(chinmay.fName)
// console.log(chinmay.sname)
// console.log(chinmay.firstName)

// chinmay.display()





// let shirish = new Father("manohar",'deshpande','shirish')
// shirish.display() // 
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// console.log(shirish.fName)

// let manoharrao = new Grandfather("manohar","deshpande")
// console.log(manoharrao)
// manoharrao.display()


class Parent {

    constructor(fName , mName , lastName){
        this.fname = fName
        this.mname = mName
        this.lastName = lastName
    }

    displayFatherName(){
        console.log(this.fname + this.lastName)
    }

    displayMotherName(){
        console.log(this.mname + this.lastName)
    }

}


class Son extends Parent {
    constructor(fName , mName , lastName,sname){
        super(fName , mName , lastName)
        this.sname = sname
    }
    displayName(){
        console.log(this.sname + this.lastName)
        super.displayFatherName()
        super.displayMotherName()
    }

}

class Daughter extends Parent {
    constructor(fName , mName , lastName,dname){
        super(fName , mName , lastName)
        this.dname = dname 

    }

    displayName(){
        console.log(this.dname + this.lastName) 
        super.displayFatherName()
        super.displayMotherName()
    }
}


let chinmayA = new Son("shirish","kanchan","deshpande","chinmay")
let gauri = new Daughter("shirish","kanchan","deshpande","gauri")

chinmayA.displayName()
gauri.displayName()