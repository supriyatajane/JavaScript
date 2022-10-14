 // // // Encapsulation
// // // object --- properties ===> method only


// // class Person {

// //     constructor(name,age,salary){
// //         this.name = name 
// //         this.age = age 
// //         this.salary = salary
// //     }

// //     updateName(nm){
// //         this.name = nm
// //     }
// //     updateAge(ag){
// //         this.age = ag
// //     }
// //     updateSalary(sl){
// //         this.salary =sl
// //     }


// //     getName(){
// //         return this.name 
// //     }
// //     getAge(){
// //       return this.age
// //     }
// //     getSalary(){
// //         return this.salary
// //     }
// // }
//
// // let amol = new Person('amol rao',12,34)
// // // program one 
// // const a = 123
// // if(true){
// //     let aa = 10
// // }

// // {
// //     let c = 11
// // }
// // // console.log(a)
// // // console.log(aa)
// // // console.log(c)


// // functions 


const printName = function(){

    let firstName = "chinmay"
    let lastName = "deshpande" 

    let printFullName  = function(){
        console.log(firstName +" "+lastName)
    }

    return printFullName
    
}

printName()()

// //  privacy


// // closure 


// // function add(){
// //     let a = 10 
// //     let b = 20
// //     return function(){
// //         console.log(a)
// //         console.log(b)
// //     }
  
// // }
// // let a = add()
// // a()


// // const printName = function(){

// //     let firstName = "chinmay"
// //     let lastName = "deshpande" 

// //     let printFullName  = function(){
// //         console.log(firstName +" "+lastName)
// //     }

// //     return printFullName
    
// // }

// // printName()()


// // program 3
// // class  Person2 {
// //     constructor(){
// //         let firstName = "chinmay"
// //         let lastName = "deshpande"
// //         this.printName = function(){
// //             console.log(firstName + lastName)
// //         }

// //     }


// // }
// // let abc = new Person2()
// // abc.printName()
// // console.log(firstName)
// // console.log(lastName)

// // _



// class Person4{
//     constructor(firstName,lastName){
//         this._firstName = firstName
//         this._lastName = lastName
//         this.printName = function(){
//             return this._firstName + this._lastName 
//         }
//     }

// }

// let amol = new Person4("amol","rao")
// console.log(amol.printName())

//-------------------------------------->






// {
//     let a = 10
//     console.log(a)
// }


// console.log(a)

// {

//     const a = 10
//     console.log(a)

// }

// console.log(a)


// let a  =10 
// a = 30
// console.log(a)


// const h = 10
// h = 30

// var e = 10 

// {
//     consoe.log(e)
// }

// function adds (){
//     var ha = "pune"
//     console.log(ha)

// }

// adds()
// console.log(ha)


let a = 10 

function addf (){
    a = 30
    console.log(a) // 30
}

addf() 
console.log(a) // 30




let a1 = 10 

function addf (){
    let a1 = 30
    console.log(a1)  // 30
}

addf() 
console.log(a1) //10