 // function add(x,y){
//     console.log(x+y)
// }
// add(13,14)

// let x = 10 
// console.log(x)

// let  addition = function(x,y){
//     console.log(x+y)
// }
// addition(12,13) // calling 
// console.log(addition) // printing the function definition for arrow function



let subtraction = function(x,y){
    return  x - y
}
// let rrr = subtraction(12,13)
// console.log(rrr)
function subtractionSecond(fn){
    // let fn = function(x,y){
    //     return  x - y
    // }
    let rrrr = fn(50,25)
    return rrrr
}

let rrtt = subtractionSecond(subtraction)
console.log(rrtt)

/**************/



function returnStory(){
    return 33
}

let rr = returnStory()
console.log(rr)

function returnStory1(){
    return "chinmay deshpande"
}

let rr1 = returnStory1()
console.log(rr1[0])


function returnStory3(){
    return [11,22,33,44,55,66]
}

let a = returnStory3()
console.log(a[a.length-1])



function returnStory4(){
    return {
        firstName:"chinmay",
        lastName:"deshpande"

    }
}

let rrr = returnStory4()
for(let key in rrr){
    console.log(key,rrr[key])
}


function addition3(){
let x = function(){
    console('hello')
}
    return x
}

let fff =  addition3()
fff()














// function subtraction2(x){
//     console.log(x)

// }

// subtraction2(23)