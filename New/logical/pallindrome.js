let num = 1221
 let pallin = num => Number(num)
    let a = Array.from(String(num), pallin)
    let x = a.reverse().join("")
 
if(num == x){
    console.log("Number is pallindrom")
}
else 
console.log("Number is not palindrom")