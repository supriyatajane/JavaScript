//synchronous execution

function add() {
    console.log(2 + 2)
}

function add2() {
    console.log(4 + 4)
}

// add2()
// add()

//asynchrous code

function adds() {
    setTimeout(function () {
        console.log('hello')
    }, 2000)
}
function adds1() {
    console.log('bye')
}

// adds()
// adds1()

//async code manage to sync using call back hell

function getuserinfo() {
    setTimeout(function () {

        console.log('user name')

        setTimeout(function () {
            console.log('user id')

            setTimeout(function () {
                console.log('user address')
            }, 1000)
        }, 2000)
    }, 3000)
}

//getuserinfo()

//async call manage by call back hell but call back hell are very tedious to manage then come promises 
// async code manage by promises

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve([11, 22, 33, 44])
    }
    else {
        reject([1, 2, 3, 4])
    }

})
pro.then(function (arr) {
    console.log(arr[0])
})
    .catch(function (str) {

        console.log(arr[0])
    })
    .finally()
{
    console.log('i am always run')
}

// async code by  
function createuser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('usrecreted') {
                resolve('user crteate')
            }
            else {
                reject('usre not created')
            }
        }, 3000)
    })
}
function createUserId()
{
    return new Promise(function(resolve,reject){
    
        setTimeout(function(){

            if('userid')
            {
                resolve('userid created')
            }
            else
            {
                reject('userid not created')
            }
        },2000)
    })

} 

function createUserName()
{
    return new Promise(function(resolve,reject){
    
        setTimeout(function(){

            if('username')
            {
                resolve('username created')
            }
            else
            {
                reject('username not created')
            }
        },1000)
    })

} 

let getInfo=async function()
{
    let a=await createuser()
    console.log(a)

    let b=await createUserId()
    console.log(b)

    let c=await createUserName()
    console.log(c)
}

getInfo()
