//fetch function returns promise

// let renderHtml=function(el)
// {
//     let con=document.querySelector('#user')
//     let html=`<div>
//     <h1>${el.id}</h1>
//     <p>${el.first_name} ${el.last_name}</p>
//     <p>${el.email}</p>
//     <img src ="${el.avatar}">
//     `
//     con.insertAdjacentHTML("beforeend",html)
// }


let renderHtml = function (el) {
    let con = document.querySelector('#users')
    let html = `
        <div>
            <h1>${el.id}</h1>
            <p>${el.first_name} ${el.last_name}</p>  
            <p>${el.email}</p>
            <img src ="${el.avatar}">
        </div>
    `
    con.insertAdjacentHTML("beforeend", html)
}

// function getUsers(pageNumber)
// {
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         //console.log(res)
//         return res.json()//---it is use for readable format
//     }).then(function(res){
//         //console.log(res)

//         res.data.forEach(user=> {
//             renderHtml(user)
//         });
//     })
// }
// getUsers(1)


//program2 
//get multple user using the single user

function singleUserInfo(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            //console.log(res.data[0].id)
            return res.data[0].id
        }).then(function (id) {
            fetch(`https://reqres.in/api/users/${id}`)
                .then(function (res) {
                    //console.log(res)
                    return res.json()
                }).then(function (res) {
                    //console.log(res)

                                    renderHtml(res.data)
                                
                })
        })
}
singleUserInfo(2)


//program 3
//async function
async function GetInfo(pageNumber)
{
let response=await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
let res=await response.json()
let id=res.data[0].id
let response1=await fetch(`https://reqres.in/api/users/${id}`)
let res2=await response1.json()
let user=res2.data
renderHtml(user)
}
GetInfo(1)