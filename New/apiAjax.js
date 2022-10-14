

//async code manage by sync then use call back hell
//but call back are very complex to manage then come promises 
//promises manage by async await function

// api

// api ---------- users --------id ----- getSingleInfo

// call back hell 

// promises 

// async function

// api ===> users ===> id ====> user


//https://reqres.in/api/users?page=2 ===> 
// https://reqres.in/api/users/2
 

function getUserInfo(pageNumber){

    let request = new XMLHttpRequest()
    request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
    request.send()

    request.addEventListener('load',function(){
       //console.log( this.responseText)
       let obj = JSON.parse(this.responseText)
       console.log(obj)
       let id = obj['data'][0]['id']

       let request = new XMLHttpRequest()
       request.open('GET',`https://reqres.in/api/users/${id}`)
       request.send()

       request.addEventListener('load',function(){
            let obj = JSON.parse(this.responseText)
            console.log(obj.data)

       })


    })

}

//getUserInfo(2)





// cypress asyn ===> execution sync ===> javscript ===> asyn 
// cypress ===> POM ====> class === javascript == asyn ====>  promises



function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}
function  getUserinfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
}

// getUsers(2).then(function(res){
//     return res.json()
// }).then(function(response){
//     let id = response.data[0]['id']
//     return id
// }).then(function(id){
//     return  getUserinfo(id)
// }).then(function(response){
//     return response.json()
// }).then(function(response){
//     console.log(response.data)
// })


// async await
let getInfoForSingleUser = async function(){
    let res = await getUsers(2)
    let obj = await res.json()
    let id = obj['data'][0]['id']
    let resB = await getUserinfo(id)
    let objB = await resB.json()
    console.log(objB.data)
}

getInfoForSingleUser()


// asyn sync 
//  sync , async 
// async ==== sync ====== call back 
// promises ====> pending reject resolve
// promises async === sync manage 
// asyn await