 // // object literal 

// let chinmay = {
//     firstName:"Chinmay",
//     lastName:"Deshpande",
//     age:12,
//     rollNumber:100
// }

// console.log(chinmay)

// // function constructor 


// let Person = function(firstName,lastName,age,roll){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.roll = roll
// }

// let amolA = new Person("amol","rao",12,24)
// console.log(amolA)


// // Es6 class 
// class Person2 {
//     constructor(firstName, lastName , roll,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.roll = roll 
//         this.age = age
//     }
// }

// let ninad = new Person2("ninad","dani",12,13)
// console.log(ninad)


// // Object create 

// let ram = Object.create({})
// console.log(ram)


// // retrive 

// // udpate 

// // add 
// ram.firstName = "ram"
// ram['lastName'] = "dani"
// ram.age = 23
// ram.rollNumber = 33

// // delete 



// console.log(ram)

// // object create method with prototype


// let pro = {
//     cal:function(){
//         console.log(2022 -1989)
//     }

// }

// let chinmay2 = Object.create(pro)
// // chinmay2.cal()
// // console.log(chinmay2)
// // console.log(chinmay2._proto_)
// /-------------------------------------/


// let pro3 = {
//     cal(){
//         console.log(2022 -1989)
//     },
//     init(firstName , lastName , age ,roll){
//         this.firstName = firstName ,
//         this.lastName = lastName,
//         this.age = age,
//         this.roll = roll
//     }

// }
// let chinmay3 = Object.create(pro3)
// chinmay3.init("chinmay3","deshpande3",23,45)
// console.log(chinmay3)


// // 2019 --- Encapulation --- private , public , protected
// // static() method
// // Oops 


// // class  Bank {

// //     static deepshika(){
// //         console.log("Welcome to our bank ")
// //     }
// // }

// // Bank.deepshika()

// // for while 

// // program



// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }


// for(let i = 0 ; i < 4 ; i++){
//     if(i == 3){
//         break
//     }
//     console.log(i)
// }

// for(let i = 0 ; i < 5 ; i++){
//     if(i == 2){
//         continue
//     }

//     console.log(i)
// }


// let g = 5

// while(g >= 0){
//     console.log(g)
//     g --
// }

// let g1 = 5
// while(g1 >= 0){

//     if(g1 == 2){
//         break
//     }
//     console.log(g1)
//     g1 --
// }
   

// // continue



// let g2 = 5
// while(g2 >= 0){

//     if(g2 == 2){
//         g2 --
//         continue

//     }
//     console.log(g2)
//     g2 --
// }
   
// program 1

// let random = Math.floor(Math.random()*6)+1 // 1 ,2 ,3 4,5,6
// console.log(random)
// let userInput = prompt('Guess the number')

// if(random == userInput){
//     console.log('your guess is correct')
// }

// else{
//     console.log('you guess is incorrect')
// }


// let random2 = Math.floor(Math.random()*6)+1
// console.log(random2)
// finite
// for(let i = 0 ; i < 3 ; i++){
//     let userInput = prompt('Guess the number')

//     if(random2 == userInput){
//         console.log('correct guess')
//         break
//     }
//     else {
//         console.log('you guess incorrect')
//     }

// }

// while

let random3 = Math.floor(Math.random()*6)+1  // 5
console.log(random3)
let userInput = prompt('Guess the number')   // 5

while(random3 != userInput){

    userInput = prompt('Guess the number') 
    if(random3 == userInput){
        console.log('correct guess')
        break
    }
    else {
        console.log('you guess incorrect')
    }

}