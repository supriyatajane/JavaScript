const account1 = {
    owner: 'Jonas Schmedtmann',  // js
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',  // jd
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams', // stw
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    //                           -5     -4  -3 -2     -1
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith', // ss
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// username
accounts.forEach(function (el) {
    //console.log(el)
    el.username = el.owner.split(' ').map(function (word) {
        return word[0]
    }).join('')
})
console.log(accounts)

accounts.forEach(function(el){
    console.log(`${el.owner} ${el.movements.length}`)
})

// movements 

// accounts.forEach(function(el){
//     let arrD = el.movements.filter(function(el){
//         return el > 0
//     })
//     let deposit = arrD.reduce(function(acc,el){
//         return acc + el
//     },0)
//     el.deposit = deposit

//     let arrW = el.movements.filter(function(el){
//         return el < 0
//     })
//     let withdrawl = arrW.reduce(function(acc,el){
//         return acc + el
//     },0)
//     el.withdrawl = withdrawl
// })

// console.log(accounts)
// [200, -200, 340, -300, -20, 50, 400, -460]
// [200,340,50,400] // sum   ---- deposit
// [-200,-300,-20,-460] // sum ----- withdrawl
// el.withdrawl  = withdrawl
// el.depoist  = deposit

// program 2

// accounts.forEach(function(el){
//     el.deposit = el.movements.filter(function(el){
//         return el > 0
//     }).reduce(function(acc,el){
//         return el + acc
//     },0)

//     el.withdrawl = Math.abs(el.movements.filter(function(el){
//         return el < 0
//     }).reduce(function(acc,el){
//         return el + acc
//     },0))

// })
// console.log(accounts)
// last five transaction and first five transaction

// program 3
accounts.forEach(function(el){
    console.log(el.movements.slice(-5))
})
//  0  1  2  3   4 5  6  0
// [22,33,44,55,66,77,88,99]
accounts.forEach(function(el){
    console.log(el.movements.slice(0,5))
})


// program 5
// name of firstuser deposit more than 5000
let oo = accounts.find(function(el){
    return el.movements.find(function(arrE){
        return arrE > 5000
    })
})

console.log(oo.owner)