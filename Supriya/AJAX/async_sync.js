//Aync and sync 

// synchroniztion execution

// function addition()
// {
//     console.log(9+9)
// }

// function addition1()
// {
//     console.log(8+8)
// }
// addition()
// addition1()

// // asynchronus execution

// function mul()
// {
//     setTimeout (function(){
//         console.log(10+10)

//     },2000)
// }

// function mul1()
// {
//     console.log(10+90)
// }

// mul()
// mul1()

// console.log("-------callback hell------------------")
// // call back hell
// function demo()
// {
// setTimeout( function(){

//     console.log('user created')
// },2000)

// setTimeout(function(){
// console.log("id retrive")

// },1000)

// setTimeout(function(){
//     console.log("get user by id")
// },500)
// }
// demo()

// //

// avoid the call back hell then use promises 
// promise are three parameter(resolve ,reject,pending)
// promise
let pro=new Promise(function(resolve,reject){

    a=10
    b=10
    if(a<=b)
    {
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

// consume promise
pro.then(function(str){
    console.log(str)
}),function(str){
console.log(str)
}

//
let pro2=new Promise(function(resolve,reject){

    let word="supriya"
    if(word.length<=7){
        resolve(["ram","shyam","siya"])
    }
    else{
        reject([10,20,30])
    }
})
pro2.then(function(arr){
    console.log(arr[0])
},function(arr){
    console.log(arr[0])
})

let pro3=new Promise(function(resolve,reject){
    let city="pune"
    if(city.length>=10)
    {
        resolve(["ngar","mumbai"])
    }
    else{
        reject([90,100])

    }
})
pro3.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[0])
})
