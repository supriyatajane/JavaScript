// floor 
console.log(Math.floor(3.7)) // 3
console.log(Math.ceil(3.1))  // 4
console.log(Math.ceil(3.6)) // 4
console.log(Math.round(4.4)) // 4
console.log(Math.round(4.6))  // 5

//0 ===> 0.99
// dice  --->    1 to 6  // 1,2,3,4,5,6
console.log('----------------------------')
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)






for(let i = 0 ; i < 5 ; i++){
    console.log(i)
}

for(let i = 0 ; i < 5 ; i++){
    if(i == 2){
        break
    }
    console.log(i)
}

for(let i = 0 ; i < 5 ; i++){
    if(i == 2){
        continue
    }
    console.log(i)
}

// // while 


let j = 5 

while( j >= 0 ){
    console.log(j)
    j--
}

let ja = 5 

while(ja >= 0){
    
    if(ja == 2){
        break
    }
    console.log(j)
    ja--
}

let ja2 = 5

while(ja2 >=0 ){

    if(ja2 == 2){
        ja2 --
        continue
    }
    console.log(ja2)
    ja2 --
}


// Math


console.log(Math.floor(12.4))
console.log(Math.ceil(12.4))
console.log(Math.round(12.5)) // 13
console.log((Math.round(12.4)))// 12

Math.random() //  0 to 1

let e = Math.random() * 6  // 0 - 5.99 // 4.5 , 2.34

console.log(Math.floor(e) + 1) // 4 , 2

// 1 , 2 , 3, 4, 5 ,6


// 0.1 , 0.23 --------- 0.99

// let randomNumber = Math.floor(Math.random()*6) + 1 
// console.log(randomNumber)

// let userName = prompt('Enter the number')

// if(userName == randomNumber){
//     console.log('you guess is correct ')
// }
// else {
//     console.log('your guess is incorrect')
// }


// let randomNumber2 = Math.floor(Math.random()*6) + 1 
// console.log(randomNumber2)

// for(let i  = 0 ; i < 5 ; i++){
//     console.log(' Guess No' , i + 1)
//     let userName = prompt('Enter the number')
//     if(userName == randomNumber2){
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }

// }


// while

let randomNumber3 = Math.floor(Math.random()*6) + 1   // 3
console.log(randomNumber3)
let userInput3 =prompt('Please enter enter') // 2

while(randomNumber3 != userInput3){
    userInput3 = prompt('Please enter enter') //3
    if(userInput3 == randomNumber3) {
        console.log('your guess is correct ')
        
    }
    else {
        console.log('your guesss is incorrect')
    }
}
