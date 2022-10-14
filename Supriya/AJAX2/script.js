// progaram
//synchronus excution

// function add() {
//     console.log(9 + 9)
// }

// function add1() {
//     console.log(10 + 10)
// }
// add1()
// add()

// // asyn -----sync
// function mul() {
//     setTimeout(function () {
//         console.log('hello')

//     }, 2000)
// }

// function mul1()
// {
//     console.log('bye')
// }

// mul()
// mul1()
// //manage the asynchrounous code then come callback hell
// // callback hell

// function getuser()
// {
//     setTimeout (function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('user get id')
//     },2000)
//     setTimeout(function(){
//         console.log('user deleted')
//     },1000)
// }

// getuser()
// //

// function getuser2()
// {
//     setTimeout (function(){
//         console.log('user created')
//         setTimeout(function(){
//             console.log('user get id')
//             setTimeout(function(){
//                 console.log('user deleted')
//             },1000)
//         },2000)
//     },3000)

// }
// getuser2()

//callback hell very tedious to manage the code so then after use the promises

//callback hell in with api
// html


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

    document.querySelector('#container').insertAdjacentHTML("beforeend", html)
}





// program 4
//api call back hell
function getuser(pageNumber)
{
    let request=new XMLHttpRequest()
    request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
    request.send()
    request.addEventListener('load',function(){
        //console.log(this.responseText)
        let data=JSON.parse(this.responseText)
       let id=data.data[0].id



        let request=new XMLHttpRequest()
        request.open('GET',`https://reqres.in/api/users/${id}`)
        request.send()
     request.addEventListener('load',function(){
        let data=JSON.parse(this.responseText)
        console.log(data.data)
        renderHtml(data.data)
     })

    })


}
getuser(2)


//then promises

//let pro = new Promise(function (resolve, reject) {

  //  let a = 10
   // let b = 20
    //if (a == b) {
   //     resolve('hello')
    //}
    //else {
      //  reject('bye')
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log('i wiill always run')
//     })

// // spi with promises
// // function getuser(pageNumber)
// {
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
// }

// function getuser(id)
// {
//     return fetch(`https://reqres.in/api/users/${id}`)
// }

// getuser(2).then(function(response){
//     return response.json()
// })
//.then(function(obj){
//     let id=obj.data[0].id
//     return getuser(id)
// }).then(function(response){
//     return response.json()
// }).then(function(obj){
//     let a=obj.data
//     renderHtml(a)
// })

// function getUserPage2(page)
// {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(obj){
//         let idOne=obj.data[0].id

//         return idOne
//     }).then(function(id){
//         return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function(response){
//             return response.json()
//         })
//     }).then(function(data){
//         renderHtml(data.data)
//     })
// }
// getUserPage2(2)
// getUserPage2(1)

// // async wait
// function getJson(url) {
//     return fetch(url).then(function (response) {
//         return response.json
//     })

// }

// let getUserInfo = async function (pageNumber) {
//     let obj = await getJson(`https://reqres.in/api/users?page=${pageNumber}`)
//     let id = obj.data[0].id
//     let data = await getJson(`https://reqres.in/api/users/${id}`)
//     let user = data.data
//     renderHtml(user)
// }
// getUserInfo(2)


//promises methods

// promise all,race ,any,settled
let getUsersAll=async function()
{
    let data=await Promise.all([
        Promise.resolve('hello'),
       // Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(data)
} 
//getUsersAll()

//race
let getUsersRace=async function()
{
    let data=await Promise.race([
        Promise.resolve('hello'),
        Promise.reject('bye'),
        Promise.resolve('hello')

    ])
    console.log(data)
}
//getUsersRace()


let getUsersAllSettle=async function()
{
    let data=await Promise.allSettled([
        Promise.resolve('hello'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(data)
}
//getUsersAllSettle()

let getUsersAny=async function()
{
    let data=await Promise.any([
        Promise.reject('bye'),
       // Promise.resolve('hello'),
       // Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(data)
}
getUsersAny()