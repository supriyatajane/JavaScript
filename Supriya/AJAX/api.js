// program 1


function renderHtml(data) {
    let html = `
        <div>
            <p>${data.first_name}</p>
            <p>${data.last_name}</p>
            <p>${data.id}</p>
            <p>${data.email}</p>
            <img src = "${data.avatar}"/>
        <div>
    `
    document.querySelector('body').insertAdjacentHTML("beforeend", html)

}



// function getUserPageWise(page)
// {
//     let request=new XMLHttpRequest()
//     request.open('GET', `https://reqres.in/api/users?page=${page}`)
//     request.send()
//      request.addEventListener('load',function(){
//         let responseBody=JSON.parse(this.responseText)
//         let idOne=responseBody.data[0].id

//         let request=new XMLHttpRequest()
//         request.open ('GET', `https://reqres.in/api/users?page=${idOne}`)
//         request.send()

//         request.addEventListener('load',function(){
//             let responseBody = JSON.parse(this.responseText)
//             renderHtml(responseBody.data)
//         })
//      })
// }


// getUserPageWise(1)

//program 3
function getUserPage2(page)
{
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        return response.json()
    })
    .then(function(obj){
        let idOne=obj.data[0].id
        
        return idOne
    }).then(function(id){
        return fetch(`https://reqres.in/api/users/${id}`)
        .then(function(response){
            return response.json()
        })
    }).then(function(data){
        renderHtml(data.data)
    })
}
getUserPage2(2)
getUserPage2(1)