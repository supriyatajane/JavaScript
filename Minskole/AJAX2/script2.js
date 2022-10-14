 // program

// function add (){
//     console.log('one')
// }

// function add2 (){
//     console.log('two')
// }

// add2()
// add1()

// async ------> async  ===> call back hello



// program2 

// function add(){
//     setTimeout(function(){
//         console.log('hello')
//     },2000)
// }

// function add2(){
//     console.log('bye')
// }

// add()
// add2()


// program async 
// api call ---> usercreate
// id data retrive 
// // user delete

// function getUser(){
//     setTimeout(function(){
//         console.log('usercreated')
//     },3000)

//     setTimeout(function(){
//         console.log('data retrive by id')
//     },2000)

//     setTimeout(function(){
//         console.log('user deleted')
//     },1000)

// }
// getUser()



// call back hell


// function getUser() {
//     setTimeout(function () {
//         console.log('usercreated')
//         setTimeout(function () {
//             console.log('data retrive by id')
//             setTimeout(function () {
//                 console.log('user deleted')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getUser()

// actual

// pagewise ---> id
// singleuser ----> renderUI

// program4

let con = document.querySelector('#container')

function renderHtml(obj) {
    let html = `
        <div>
            <p>${obj.id}</p>
            <p>${obj.first_name}</p>
            <p>${obj.last_name}</p>
            <p>${obj.email}</p>
            <img src = "${obj.avatar}"/>
        </div>
    `
    con.insertAdjacentHTML('beforeend', html)

}




// function getUser(pageNumber){

//     let request = new XMLHttpRequest()
//     request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
//     request.send()
//     request.addEventListener('load',function(){
//         //console.log(this.responseText)
//         let data = JSON.parse(this.responseText)
//         let id = data.data[0].id

//         let request = new XMLHttpRequest()
//         request.open('GET',`https://reqres.in/api/users/${id}`)
//         request.send()

//         request.addEventListener('load',function(){
//             let data = JSON.parse(this.responseText)
//             console.log(data.data)
//             renderHtml(data.data)
//         })

//     })

// }

// getUser(2)



// program 5


// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 10

//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }

// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always run ')
// })


//api with promises


// function getUsers(pageNumber){
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
// }

// function getUser(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
// }

// getUsers(2).then(function(response){
//     return response.json()
// }).then(function(obj){
//     let id = obj.data[0].id
//     return getUser(id)
// }).then(function(response){
//     return response.json()
// }).then(function(obj){
//     let a = obj.data
//     renderHtml(a)
// })


// // async  await 

// function getJson(url){
//     return fetch(url).then(function(response){
//         return response.json()
//     })
// }

// // let getUserInfo = async function(pageNumber){
// //     let obj = await  getJson(`https://reqres.in/api/users?page=${pageNumber}`)
// //     let id = obj.data[0].id
// //     let data = await  getJson(`https://reqres.in/api/users/${id}`)
// //     let user = data.data
// //     renderHtml(user)
// // }
// // getUserInfo(2)

// // condition ---- async code ---- sync 


// // all()


// let getUsers = async function () {
//     let data = await Promise.all([
//         getJson(`https://reqres.in/api/users/1`),
//         getJson(`https://reqres.in/api/users/2`),
//         getJson(`https://reqres.in/api/users/7`)

//     ])
//     return data
// }

// getUsers().then(function(user){
//     console.log(user)
//     renderHtml(user[0].data)
//     renderHtml(user[1].data)
//     renderHtml(user[2].data)
// })


// 









// promsies

// async

// Promises all , race , any , allSettled



let getUsersAll = async function () {
   
    let data = await Promise.all([
        Promise.resolve('hello') ,
        //Promise.reject('Hello') ,
        Promise.resolve('Bye')
    ])

    console.log(data)
}
getUsersAll()

let getUsersRace = async function () {
    let data = await Promise.race([
        Promise.reject('Hello') ,
        Promise.resolve('hello') ,
        Promise.resolve('Bye')
    ])
    console.log(data)
}
getUsersRace()


let getUsersAllSettle = async function () {
    let data = await Promise.allSettled([
        Promise.reject('Hello') ,
        Promise.resolve('hello') ,
        Promise.resolve('Bye')
    ])
    console.log(data)
}
getUsersAllSettle()


let getUsersAny = async function () {
    let data = await Promise.any([
        Promise.reject('Hello') ,
        Promise.resolve('hello') ,
        Promise.resolve('Bye')
    ])
    console.log(data)
}
getUsersAny()