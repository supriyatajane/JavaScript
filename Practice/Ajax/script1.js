//async-sync

function getUser(userid)
{
    return fetch(`https://reqres.in/api/users/${userid}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        renderHtml(res.data)
        return res.data
    })
}

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

// async function userInfo(userOne,userTwo,userThree)
// {
//     let userone=await getUser(userOne)
//     let usertwo=await getUser(userTwo)
//     let userthree=await getUser(userThree)
//     console.log(userone,usertwo,userthree)
// }
// userInfo(1,2,3)
//then you dont need the stop execution by they not depend other responce
//then you ecxecute parallely then use promises method



//promise
async function ParallelE(userOne,usertwo,userThree)
{
    let data=await Promise.all([
        getUser(userOne),
        getUser(usertwo),
        getUser(userThree)
    ])
    console.log(data)
}
//ParallelE(2,4,6)



async function ParallelE(userOne,usertwo,userThree)
{
    let data=await Promise.race([
        getUser(userOne),
        getUser(usertwo),
        getUser(userThree)
    ])
    console.log(data)
}
ParallelE(2,4,6)
