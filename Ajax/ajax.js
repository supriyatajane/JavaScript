//sync code---means syncnously execution one by one 
function add(a, b) {
    console.log(a + b)
}

function add2(c, d) {
    console.log(c + d)
}

// add(1,2)
// add2(5,6)

//async code---this code not execution synchronous 
function div(m, n) {
    console.log(m - n)
}

function div2(l, k) {
    setTimeout(function () {
        console.log(l - k)
    }, 2000)
}
//  div2(20,10)
//  div(20,5)

//then async code manage by call back hell
function getUserInfo() {
    setTimeout(function () {
        console.log('getuserID')

        setTimeout(function () {
            console.log('getuserName')

            setTimeout(function () {
                console.log('getuserInfo')

            }, 500)
        }, 1000)

    }, 3000)

}
//getUserInfo()

//but call back hell is very tedious to manage then promises come 
function getId()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user Id')
        },3000)
    })
}

function getName()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user Name')
        },1000)
    })
}

function getInfo()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('User Info')
        },500)
    })
}

// getId().then(function(res){
//     console.log(res)
//     return getName() 
// }).then(function(res){
//    console.log(res)
//      return getInfo()
//  }).then(function(res){
//     console.log(res)
//  })

//and secon way async function''

async function getf()
{
    let a=await getId()
    console.log(a)
    let b=await getName()
    console.log(b)
    let c=await getInfo()
    console.log(c)
}
getf()