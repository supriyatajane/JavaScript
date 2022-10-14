//function one(){
    //     console.log("hello")
    // }
    // //one()
    
    
    // function two(){
    //     console.log('bye')
    // }
    // //two()
    
    // two() // bye
    // one() // hello
    
    
    
    // function one(){
    //     setTimeout(function(){
    //         console.log('hello')
    //     },2000)
    // }
    
    // function two(){
    //     console.log('bye')
    // }
    
    // one()
    // two()
    
    
    // asyn ====> o/p ===>>> first goes to execution context
    
    // call ------ async  =====> sync 
    // user create    ======>
    // get user by id =====>
    // get user info  =====>
    
    function getUser() {
        setTimeout(function () {
            console.log('user created')
        }, 3000)
    
        setTimeout(function () {
            console.log('get user  id')
        }, 2000)
    
        setTimeout(function () {
            console.log('get user info')
        }, 1000)
    
    }
    //getUser()
    // asyn code ---- execution --- sync ------> call back hell
    function getUser2() {
        setTimeout(() => {
            console.log('user created')
            setTimeout(() => {
                console.log('getUser id')
                setTimeout(() => {
                    console.log('get user info')
                }, 1000)
            }, 2000)
    
        }, 3000);
    }
    //getUser2()
    // promises 
    
    // let pro = new Promise(function(resolve, reject){
    //     let a = 10
    //     let b = 10
    //     if(a == b){
    //         resolve('hello')
    //     }
    //     else {
    //         reject('bye')
    //     }
    // })
    
    // pro.then(function(str){
    //     console.log(str)
    // },function(str){
    // console.log(str)
    // })
    
    let pro2 = new Promise(function (resolve, reject) {
        let a = 10
        let b = 20
        if (a == b) {
            resolve([2, 3, 4])
        }
        else {
            reject([-22, -33, -44])
    
        }
    })
    
    pro2.then(function(a){
        console.log(a[1])
    })
    .catch(function(a){
        console.log(a[2])
    })
    
    let pro3 = new Promise(function (resolve, reject) {
        let a = 10
        let b = 20
        if (a == b) {
            resolve([2, 3, 4])
        }
        else {
            reject([-22, -33, -44])
    
        }
    })
    
    pro3.then(function(a){
        console.log(a[1])
    })
    .catch(function(a){
        console.log(a[2])
    })
    .finally(function(){
        console.log('I always run')
    })
    
    
    // javscript - projects 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // consuming the promise
    
    // pro.then(fn,fn)
    // .catch(fn)
    // .finally(fn)
    
    
    // [12,3,4].map(function(){
    
    // })