// arrays revision
//array store the value by index

let name=['ram','shyam','prakash']
//push-----return the new length of array
let aa=name.push('amar')
console.log(aa)
console.log(name)

//unshift()------it also returns array of length
let bb=name.unshift('dipa')
console.log(bb)
console.log(name)

//pop()----return the remove element of array
let cc=name.pop()
console.log(cc)
console.log(name)

//shift()
let dd=name.shift()
console.log(dd)
console.log(name)

//map, filter,reduce,foreach

let birthyear=[1990,1992,1997,2000]
let year=[]
for(let i=0;i<i<birthyear.length;i++)
{
   let b=(2022-birthyear[i])
   year.push(b)
   
}

console.log(year)