//----Slice()
//      0   1  2  3  4  5
let ja=[11,22,33,44,55,66]
  //      -6 -5 -4 -3 -2 -1
        console.log(ja.slice(2))
console.log(ja.slice(-5))
console.log(ja.slice(-4,-1))
console.log(ja.slice(-1,-4))

//---splice()
let namesay=["pranay","raj","simran","radha"]
//namesay.pop()
//namesay.shift()
//console.log(namesay)

//namesay.splice(startingIndex,numberofdeleted)
namesay.splice(1,2)
console.log(namesay)

//with replacement
namesay.splice(1,2,"supriya","rutuja")
console.log(namesay)

//flat()
// multiple dimensionl array
let numbersh=[[12,13,14],[222,333,444],[555,666,777]]
console.log(numbersh[0][0])
console.log(numbersh[0][1])
console.log(numbersh[2][2])

let qqq=numbersh.flat()
console.log(qqq)

//fill
let mark=[88,77,66,33,11,22,66,90,65]
let r=mark.fill('88',2,5)
console.log(r)