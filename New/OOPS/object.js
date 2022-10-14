 // object -- property and method

// object literal


let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:12,
    skills:["python","javascript","jquery"],
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

chinmay.display()
let amol = {
    firstName:"amol",
    lastName:"rao",
    rollNo:123,
    skills:["python3","css"],
    display:function(){
        console.log(this.firstName + this.lastName)
    }
 } 
 amol.display()

 // function contructor

 let Person = function(fn,ln,ag,roll){
     this.firstName  = fn
     this.lastName = ln
     this.age = ag
     this.rollNo = roll
     this.display = function(){
         console.log(this.firstName + this.lastName)
     }
 
 }

 let rasika = new Person('rasika','kulkarni',30,34)
 let sarika = new Person('sarika','pansare',24,300)
 console.log(rasika)
 console.log(sarika)

 rasika.lang = "hindi"
 console.log(rasika)

rasika.firstName = "rasika k"
console.log(rasika)













// // retrive
// console.log(amol.firstName)
// // update 
// amol.firstName = "ram"
// // delete 
// delete amol.firstName
// //add
// amol.lang = "hindi"