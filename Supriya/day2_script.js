////FUNCTION IN JAVASCRIPT


//1--FUNCTION WITHOUT PARAMETER & RETURN TYPE

function add() {
    console.log(9 + 9)
}
add()
add()

//2--FUNCTION WITH PARAMETER & OUT RETURN TYPE
function sub(x, y) {
    console.log(x - y)
}
sub(100, 50)
sub(50, 10)

//3--FUNCTION WITH PARAMETER & WITH RETURN TYPE
function mul(x, y) {
    return (x * y)
}
let qq = mul(12, 10)
console.log(qq)
console.log(qq + 100)
console.log(qq - 50)


//THREE TYPE FUNCTION IN JAVASCRIPT

//1---FUNCTION DECLARATION
function greet(word) {
    return "welcome" + word
}
let kk = greet("supriya")
console.log(kk)

//2---FUNCTION EXPRESSION
let greet2 = function (word) {
    return "Good" + word
}
let kk2 = greet2("Day")
console.log(kk2)

//3--ARROW FUNCTION
let greet3 = (word) => {
    return "welcome" + word
}
let kk3 = greet3("home")
console.log(kk3)

//EXAMPLE

let addz1 = function (x, y)//--FUNCTION EXPRESSION
{
    console.log(x + y)
}
addz1(10, 40)

function addz2(x, y)//---function declaration
{
    console.log(x + y)
}
addz2(10, 40)

//arrow function
let addz3 = (x, y) => {
    console.log(x + y)
}
addz3(10, 40)