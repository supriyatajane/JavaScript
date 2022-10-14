// asyn vs synch 


// // synchronous execution
// function addition() {
//     console.log(9 + 9)
// }

// function addition2() {
//     console.log(9 + 8)
// }

// addition2()
// addition()

// // asynchronus 

// function addition3() {
//     setTimeout(function () {
//         console.log(8 + 8) // 16
//     }, 2000)
// }
// function addition4() {
//     console.log(6 + 6) // 12
// }


// addition3()
// addition4()

// // real time ---- API -- asychronus

// // create user 
// // id 
// // id - get
// // id update 
// // id delete

// // call back hell


// function check() {

//     setTimeout(function () {
//         console.log('user created') // 1
//     }, 3000)

//     setTimeout(function () {
//         console.log('id retrived') // 2
//     }, 1000)

//     setTimeout(function () {
//         console.log('get user by id')//3
//     }, 2000)


//     setTimeout(function () {
//         console.log('update user by id') //4
//     }, 2000)


//     setTimeout(function () {
//         console.log('delete user by id')//5
//     }, 3000)
// }
// check()

// // cypress + js
// function check2() {
//     setTimeout(() => {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('id retrives')
//             setTimeout(() => {
//                 console.log('retrive user by id')
//                 setTimeout(() => {
//                     console.log('update user by id')
//                     setTimeout(() => {
//                         console.log('delete user by id')
//                     },1000)
//                 }, 1000)
//             }, 2000)
//         }, 3000)
//     }, 4000);
// }

// check2()
// reject()
// resolve()

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10 
//     // status code ===> 200
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye!")
//     }
// })
// // consume 
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


let pro2 =  new Promise(function(resolve,reject){
    let word = "chinmay"

    if(word.length >= 7){
        resolve(["ram","sham","ganesh"])
    }
    else {
        reject([11,22,33])
    }


})

pro2.then(function(arr){
    console.log(arr[0])
},function(arr){
    console.log(arr[0])
})



let pro3 =  new Promise(function(resolve,reject){
    let word = "hinmay"

    if(word.length >= 7){
        resolve(["ram","sham","ganesh"])
    }
    else {
        reject([11,22,33])
    }


})

pro3.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[0])

})










// class Person {
//     constructor(first,name){
//         this.first = first
//         this.name = name
//     }
// }

// let am = new Person("chinmay","bh")






















// call back hell

// promises 

// async

// parallel promise  and all 

// api -----> real time scenario