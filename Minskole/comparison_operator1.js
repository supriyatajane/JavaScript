// comparision 

//< , > == , != , === , <= , >= , !== , ==

// basic --- === or ==

console.log(8 === '8')
console.log(8 == '8')
console.log(8 !== '7')
console.log(8 !== '8')



// AND 
// True True  - True
// True False - False
// False True - False
// False False  - False


// OR
// True True  - True
// True False - True
// False True  - True
// False False - False

// NOT 
// ! True - False
// !False - True
///-----------------------------------------------/

// conditional statement??

//mark ==> 'A' || 'B' || 'C'
// marks > 90 ===> A
// marks > 60 &&  marks <= 90 ===> B
// marks < 60 ====> c
///----------------------/

let marks  = 44
 if(marks > 90 ){
     console.log('you got A grade')
 }
 if(marks > 60 &&  marks <= 90){
     console.log('you got B grade')
 }
 if(marks < 60){
     console.log('you got C grade')
 }

// if(marks > 90 ){
//     console.log('you got A grade')
// }
// else if(marks > 60 &&  marks <= 90){
//     console.log('you got B grade')
// }
// else if(marks < 60){
//     console.log('you got C grade')
// }
// else {
//     console.log('hello')
// }

// switch case



let city = "Nagpur"

// switch(city){
//     case "Pune":
//         console.log('MH')
//     case "Bhopal":
//         console.log('MP')
//     case "Lucknow":
//         console.log('UP')
//     default:
//         console.log('Please Enter correct city')

    
// }

switch(city){
    case "Pune":
    case "Nagpur":
    case "Solapur":
        console.log('MH')
        break
    case "Bhopal":
        console.log('MP')
        break
    case "Lucknow":
        console.log('UP')
        break
    default:
        console.log('Please Enter correct city')
}

// loops


for(let i = 0 ; i < 3 ; i++){  //1 // 2 // 3
    console.log(i) // 0 , 1 ,2
}
for(let i = 10 ; i >= 0 ; i--){ 9
    console.log(i) // 0
}

// for(intialization;conditioCheck;increment/decrement){
//     // statements
// }

// let k = 0
// for(;k < 5;){
//     console.log(k)
//     k ++
//     // k = k+1
//     // k += 1
// }


// break keyword
for(let i = 0 ; i < 5 ; i++){ // 1 // 2
    if(i == 2){
        break
    }
    console.log(i) // 0 // 1
}


for(let i = 0 ; i < 5 ; i++){  //1 // 2 // 3 // 4 // 5

    if(i == 2){
        continue
    }
    console.log(i)  // 0 // 1 // 3 // 4
}