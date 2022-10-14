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
//program 1
const accounts = [account1, account2, account3, account4];
// username
 accounts.forEach(function(el){
   el.username= el.owner.split(' ').map(function(word){
        return word[0]
    }).join('')
})
console.log(accounts)

//program 2
//owner name and their trasaction length
accounts.forEach(function(el){
    console.log(`${el.owner} ${el.movements.length}`)
})

//program 3
//filter the deposit and withdrawl

accounts.forEach(function(el){
   el.deposit =el.movements.filter(function(str){
        return str > 0
    }).reduce(function(acc,re){
       return  acc+re
    },0)
})
console.log(accounts)

//math.abs use to remove - sign

accounts.forEach(function(el){
    el.withdraw =Math.abs(el.movements.filter(function(str){
         return str < 0
     }).reduce(function(acc,el){
        return acc+el
     },0))
 })
 console.log(accounts)
 //program 5 
//find the last five transaction
accounts.forEach(function(el){
    console.log(el.movements.slice(-5))
})

console.log('-----------------------first five---------------')
//first five transction
accounts.forEach(function(el){
    console.log(el.movements.slice(0,5))
})

//find the firstuser where deposit >50000
let oo=accounts.find(function(el){
   return el.movements.find(function(elc){
        return elc>5000
    })
})
console.log(oo.owner)