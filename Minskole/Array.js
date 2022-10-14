 // pop()  push() includes() shif() unshift() sort() index()
// join()


// program  One 

//          0  1   2
let ages = [11,13,14]
//[2011,2009,2008]
let birthYear = [] // [2011,2009,2008]
for(let i = 0 ; i <ages.length ; i++){
   let by = 2022 - ages[i]
   birthYear.push(by)
}
console.log(birthYear)

// map
let aaa = ages.map(function(el){
   return 2022 - el 
})
console.log(aaa)

let asat = [11,23,45]
// [13,25,47]

let bbb = asat.map(function(el){
    return el + 2
})

console.log(bbb)

/*********/

// // program 2 
let numbers = [22,33,44,55,11,22,33,44,1,4]
let obove20 = []
for(let i = 0 ; i < numbers.length ;i++){
    //console.log(numbers[i])
    if(numbers[i] > 20){
        obove20.push(numbers[i])
    }
}
console.log(obove20)
// array -- filter()
let ccc = numbers.filter(function(el,index,arr){
    return el > 20
})
console.log(ccc)

let bn = [22,33,44,55,33,22,11,66]
let iii = bn.filter(function(el){
    return el > 50
})
console.log(iii)

// program  3
let su = [11,22,33]
let total = 0 
for(let i = 0 ; i < su.length ; i++){
    total = total + su[i]
    // 0    +   11 ===> 11
    //11    +   22  ====> 33
    //33    +   33  =====>  66 + 5
 }
 console.log(total)
 // reduce
 let iiy = su.reduce(function(acc,el){
        return acc + el // 11 // 33
 },5)
 console.log(iiy)


//  // program  4

 let names = ["ram","sham","raj"]
 for(let i = 0 ; i < names.length ; i++){
     console.log("welcome "+ names[i])
 }

 // forEach()

 let tt = names.forEach(function(el){
     console.log('welcome '+ el)

 })
 
 // array 



 // map ()
let numbersa = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]


let ary = numbersa.map(function(el,index,arr){
    return el * 2
})
console.log(ary)

// filter()

let jkk = [100,500,-23,33,-400]

//[100,500,33]
//[-23,-400]

let depoist = jkk.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = jkk.filter(function(el,index,arr){
    return el < 0
})
console.log(depoist)
console.log(withdrawl)

// reduce()

let totalD = depoist.reduce(function(acc,el){
    return acc + el  
},0)
console.log(totalD)

let totalW = withdrawl.reduce(function(acc,el){
    return acc + el  
},0)
console.log(totalW)

 // forEach()

 let namesa = ["chinmay","shirish","sanjay"]
 namesa.forEach(function(el){
    console.log('welcome '+ el)
 })
 // find()
//        0  1   2  3 4  5  6  7
 let h = [22,33,44,11,22,33,44,55]

 let rrr = h.filter(function(el){
     return el > 30
 })
 console.log(rrr)


let rrra = h.find(function(el){
    return el > 30
})
console.log(rrra)

let rrray = h.findIndex(function(el){
    return el > 30
})
console.log(rrray)

let j = [11,12,33,44,55,11,33,4]

let yyy = j.every(function(el,index,arr){
    return el > 10
})
console.log(yyy)

let yyya = j.some(function(el,index,arr){
    return el > 1000
})
console.log(yyya)


// map() -- el ,index ,arr ==> array 

// filter() - el,index,arr ===> array

// reduce() -- acc ,el,index arr ===> expression value 

// forEach --- el ,index ,arr ==> void

// find() ---- el , index,arr ===> single element 

// findIndex() --- el , index ,arr ==== Number (index)

// some() ---- el ,index,arr ====> boolean

// every() ---- el, index,arr ===> boolean

 //slice()

//           0        1        2       3      4    5  
 let mn = ["ninad","chinmay","mayur","ram","raj","ravi"]
 //           -6       -5       -4     -3    -2     -1
 //mn.slice(start,end(//not included))
 
 console.log(mn.slice(2,5)) // ['mayur','ram','raj']
 console.log(mn.slice(1,4))
 console.log(mn.slice(2))
 console.log(mn.slice(3))
 console.log(mn.slice(-4))
 console.log(mn.slice(1,-4))
 console.log(mn.slice(2,-1))
 console.log(mn.slice(-1,-4))





 //splice()

 //flat()

//-------------------------------->
 // slice()

 //      0  1  2   3  4   5
let ja = [11,22,33,44,55,66]

//       -6 -5  -4  -3 -2 -1

console.log(ja.slice(2)) //[33,44,55,66]
console.log(ja.slice(-5)) //[22,33,44,55,66]
console.log(ja.slice(1,4)) //[22,33,44]
console.log(ja.slice(-4,-1)) // [33,44,55]
console.log(ja.slice(-1,-4))  // []

 // spilce()//    0        1      2         3
 let namesay = ["pranay","emdo","abhisha","raj"]
// namesay.pop()
// console.log(namesay)
// namesay.shift()
// console.log(namesay)
//namesay.splice(startingIndex,numberOfeletoBeDeleted)

 //namesay.splice(1,2)
//console.log(namesay)

// with replacement
namesay.splice(1,2,"chinmay","ram")
console.log(namesay)

 // flat()
 // multiple dimensional array 

 //                  0             1            2
 //                0   1  2    0   1   2    0    1    2           
 let  numbersh = [[12,13,14],[222,333,444],[555,666,777]]
 console.log(numbersh[0][0])
 console.log(numbersh[0][2])
 console.log(numbersh[2][2])

 let qqq = numbersh.flat()
 console.log(qqq)

 // fill()
//            0  1  2   3  4  5  6  7 8   9
 let marks = [88,33,44,55,66,77,88,22,33,44]
 let r = marks.fill('88',2,5)
 console.log(r)


// Array 
// Functions 
// decleartion , expression ,arro
 // flatmap() ==>












 // 8 pm ---

 // 7 am 

 // 9 am