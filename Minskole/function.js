 // array string object function 
// function object , function , string , number


// number  as a parameter to function
function addition(x,y){
    return x + y
}
let aoi = addition(12,13)
console.log(aoi)

// string a parameter to function 

// vowels - // a e i o u
function countVowels(word){
    // let word = "chinmay"
    let count = 0
    for(let i = 0 ; i < word.length;i++){
        word[i] = word[i].toLowerCase()
        if( word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
                count = count + 1
        }
    }
    return count
}
let total = countVowels("chinmay")
console.log(total)

///--------------------------------/
// string are immutable , cannot chaneg single characrter

let n = "poorva"
console.log(n[0])
n[0] = "a"
n = "sarika"
console.log(n)

// array as parameter to function


let marks = [1,2,7]
function sumAll(arr){

    //let arr = marks 

    arr[0] = 23
    console.log(arr) // [23,2,7]

}
console.log(marks) // [1,2,7]
sumAll(marks)
console.log(marks) // [23,2,7]



let a = [11,22,33]
let b = a  //== [99,88,33]
b[0] = 99
a[1] = 88

console.log(a) //[99,88,33]
console.log(b) //[99,88,33]

let r = [11,22,33]
function sumAll(arr){
    let ray =  arr.reduce(function(acc,el){
        return acc + el
    },0)
    return ray
}
let qqq = sumAll(r)
console.log(qqq)


// oject 

let info = {
    fullName:"chinmay deshpande",
    age:12
}

let info2 = info
info.firstName = "poorva vyas"
console.log(info2)
console.log(info)

// object as a paramter to another function 

// let info3 = {
//     fullName:"chinmay deshpande",
//     age:12
// }
// function printObj(obj) {
//     console.log(obj)
//     obj.age = 122
// }
// console.log(info3)
// printObj(info3)
// console.log(info3)

let info4 = {
    fullName:"amol rao",
    age:12,
    skills:["python","javascript","css"]

}

function printAllobj(obj){
    for(let key in obj){
        console.log(key,info4[key])
    }
}
printAllobj(info4)