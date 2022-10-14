// // sync execution
// function add(a, b) {
//     console.log(a + b)
// }

// function add1(a, b) {
//     console.log(a + b)
// }

// add(10, 20)
// add1(22, 33)

// //asyn and sync execution
// function adds(a, b) {
//     console.log("hiii")
// }

// //.this is async execution
// function adds1(a, b) {
//     setTimeout(function () {

//         console.log("bye")
//     }, 2000)
// }

// adds1()
// adds()

// function getuser() {
//     setTimeout(function () {
//         console.log("user id")
//     }, 3000)

//     setTimeout(function () {
//         console.log("user name")
//     }, 2000)

//     setTimeout(function () {
//         console.log("user info")
//     }, 1000)

// }
// getuser()

//then syn code manage by call back hell
function getuser2() {
    setTimeout(function () {
        console.log("user id")
        setTimeout(function () {
            console.log("user name")
            setTimeout(function () {
                console.log("user info")
            }, 1000)


        }, 2000)
    }, 3000)


}
//getuser2()

//but call back hell is very tedious to manage to large code then come promises come to async code manage symc execution
// let pro=new Promise(function(resolve,reject){

//     a=10
//     b=20
//     if(a<b)
//     {
//         resolve([10,20,30])
//     }
//     else
//     {
//         reject([-10,20,30])
//     }
// })

// pro.then(function(a){
//     console.log(a[0])
// }).catch(function(b){
//     console.log(b)
// }).finally(function(){
//     console.log("i am always execute")
// })

//
function crateateId(){
   return new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve("user id")
    },3000)
    })
}

function createUser()
{
    return new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve("userNme")
   },2000)
    })
}

function createuserInfo()
{
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("userinfo")
    },1000)
    })
}

crateateId().then(function(a){
    console.log(a)
    return createUser()
    
}).then(function(b){
    console.log(b)
    return createuserInfo()
}).then(function(c){
    console.log(c)
})

//the new method async function manage to async code
async function  getuserInfo()
{
    let a=await(crateateId())
    console.log(a)
    let b=await(createUser())
    console.log(b)
    let c=await( createuserInfo())
    console.log(c)
}
getuserInfo()