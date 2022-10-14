//#Prime 
let num = 7
let prime = 0

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log(num + " is NOT Prime number")
    prime++
    break
  }
}
if (prime == 0) {
  console.log(num + " is prime Number")
}