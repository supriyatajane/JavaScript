// even odd 
let num=10
if(num%2==0)
{
    console.log('no is even')
}
else{
    console.log('no is odd')
}

console.log("------------")
// find addition 1 to 5 number addition of even no
let arr=[1,2,3,4,5]
let sum=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
   sum=sum+arr[i]
    }
}
console.log(sum)

//find addition 1to 5 no addition odd no
let odd=[1,2,3,4,5]
let add=0
for(let i=0;i<odd.length;i++)
{
    if(odd[i]%2!=0)
    {
        add=add+odd[i]
    }
}
console.log(add)
//factorial means 1 to that number multiplication

let fact = 5
let temp = fact

for(let i=1; i<temp; i++){

    fact=fact*i
}
console.log(fact)