// synchronus function
function add(x,y)
{
    return x+y
}
let aa=add(2,2)
console.log(aa)

function add2(x,y)
{
    return x+y
}
let bb=add2(2,3)
console.log(bb)

add()
add2()

//function sync
function mul()
{
    setTimeout(function(){
console.log('hello')
    },2000)
}

function mul2()
{
    console.log('hiii')
}

mul()
mul2()

//async manage by call back hell
function empId()
{
    setTimeout(function(){

        console.log('employee name')
    },3000)
    setTimeout(function(){
        console.log('employee id')
    },4000)
}

empId()

//async code execution code excution cycle sync manage by call back hell

function getuser()
{
    setTimeout(function(){

        console.log('employee name')

        setTimeout(function(){
            console.log('employee id')

        },4000)
    },3000)
}

getuser()


//then call back hell very tedious to manage then use promises
//promise are three steps--resolve,reject,pending

let pro=new Promise(function(resolve,reject){
    let a=10
    let b=11
    if(a==b)
    {
        resolve('i am resolve promise')
    }
    else{
        reject('i am reject promise')
    }
})
pro.then(function(str)
{
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally()
{
    console.log('i am always run')
}

let pro1=new Promise(function(resolve,reject){
    let x=20
    let y=20
    if(x==y)
    {
        resolve([11,22,33,44])
    }
    else{
        reject([90,30,40,20])
    }

})
pro1.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[0])
})
.finally()
{
    console.log('i am finally')
}

