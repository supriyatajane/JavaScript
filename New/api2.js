//Ajax with api


//old way 
function getuserinfo(pageNumber) {
    let request = new XMLHttpRequest()
    request.open('GET', `https://reqres.in/api/users?page=2=${pageNumber}`)
    request.send()

    request.addEventListener('load', function () {
        let obj = JSON.parse(this.responseText)
        console.log(obj)


        let id = obj['data'][0]['id']

        let request = new XMLHttpRequest()
        request.open('GET', `https://reqres.in/api/users/${id}`)
        request.send()

        request.addEventListener('load', function () {
            let obj = JSON.parse(this.responseText)
            console.log(obj.data)
        })

    })


}
//getuserinfo(2)


// new way

function getUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=2=${pageNumber}`)
}

function getuserId(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
}

// getUser(2).then(function (res) {
//     return res.json()
// }).then(function (response) {
//     id = response.data[0].id
//     return id

// }).then(function (id) {
//     return getuserId(id)

// }).then(function (response) {
//     return response.json()
// }).then(function (response) {
//     console.log(response.data)
// })


//async await

let getInfoForSingleUser=async function()
{
    let res=await getUser(2)
    let obj=await res.json()
    let id=obj['data'][0]['id']
    let res2=await getuserId(id)
    let objb=await res2.json()
    console.log(objb.data)
}

getInfoForSingleUser()