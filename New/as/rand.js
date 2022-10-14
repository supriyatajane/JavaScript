// // no  in javascript

// //math.floor
// //it return largest integer to given no
// console.log(Math.floor(12.5))

// console.log(Math.floor(11.5))

// console.log("---math.ceil------------------")
// //always rounds next largest integer
// console.log(Math.ceil(11.2))
// console.log(Math.ceil(22.4))

// console.log('-------math round--------------')
// // returns the value of a number rounded to the nearest integer (.5)---next integer
// console.log(Math.round(33.2))
// console.log(Math.round(33.4))
// console.log(Math.round(33.5))

// console.log("------math random-------")

// //random no is 0-1 range 
//  console.log(Math.random()) // 0 - 1 e.g 0.33 , 0.44
//  console.log(Math.random()*6) // 0 - 5.99 e.g 5.12 ,4.33

//  //console.log(Math.random()*6) // 0 - 5.99 e.g 5.12 ,4.33
//  //use because math.floor returns largest integer
// console.log(Math.floor(Math.random() * 6)) 

// //guess one input
//  let randomNumber = Math.floor(Math.random()*6)+1
//  console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6')
//  if(randomNumber == userInput){
//     console.log('your guess is correct')
//  }
// else {
//     console.log('your guess is incorrect')
//  }

//output only 5 times
// let randomNumber2 = Math.floor(Math.random()*6) + 1
// console.log(randomNumber2)
//  for(let i = 0  ; i < 5 ; i++){
//     let userInput = prompt('Please Enter any number from 1 to 6')
//      if(userInput == randomNumber2){
//         console.log('your guess is correct ')
//        break
//     }
//    else {
//         console.log('you guess is incorrect please try again')
//     }
    
//  }

// program 3

let randomNumber2 = Math.floor(Math.random()*6) + 1  //3
 console.log(randomNumber2)
let userInput = prompt('Please Enter any number from 1 to 6')   // 3
 while(randomNumber2 != userInput){
     userInput = prompt('Please Enter any number from 1 to 6')  
     if(userInput == randomNumber2){
         console.log('you guess is INcorrect ')
         break
     }
     else {
         console.log('you guess is correct please try again')
     }

}


// program 4
// let randomNumber2 = Math.floor(Math.random()*6) + 1  // 3
// console.log(randomNumber2)
// do {
//     let userInput = prompt('Please Enter any number from 1 to 6')   //3
//     if(randomNumber2 == userInput){
//         console.log('your guess is correct ')
//         break
//     }
//     else {
//         console.log('you guess is incorrect try again')
//     }
// }while(userInput != randomNumber)

