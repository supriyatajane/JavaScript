// Javascript is make the things dynamic

// Javascript ---> javascript 
//<p id="one" class="two" name="nm">Fruit List</p>
// Javascript - element add , element update , element retrive , element delete
// Javascript - element attribute update , element attribute delete,element  attribute add 
// Javascript element attribute retrive


// element retrive
// //<p id="one" class="two" name="nm">Fruit List</p>

// //tagName
// let pTagName =  document.querySelector('p')
// console.log(pTagName)

// // className 

// let byClassName = document.querySelector('.two')
// console.log(byClassName)
// // let htmlCollectionA = document.getElementsByClassName('green')
// // let nodeListB = document.querySelectorAll('.green')
// // console.log(htmlCollectionA)
// // console.log(nodeListB)

// // id 

// let idOne = document.getElementById('one')
// let idTwo = document.querySelector('#one')
// console.log(idTwo)
// console.log(idOne)
// // common formula (css selector)
// // tagName[attribute = "value"]

// //<p id="one" class="two" name="nm">Fruit List</p>

// let ele  = document.querySelector('p[name="nm"]')
// console.log(ele)

// element update 

let paraOne = document.querySelector('#one')
console.log(paraOne)

console.log(paraOne.textContent)
console.log(paraOne['textContent'])
paraOne.textContent = "Fruit's List"

// element delete 

let ulList = document.querySelector('#ulList')
console.log(ulList)

let firstElement = document.querySelectorAll('.red')[0]
console.log(firstElement)
ulList.removeChild(firstElement)
// element add
let newLi = document.createElement('li') // <li></li>
newLi.textContent = "Chikoo" // <li>Chikoo</li>
newLi.className = "red"
ulList.appendChild(newLi)


// --------------->

// delete attribute
newLi.removeAttribute('class')
// adding the attribute
newLi.className = "red"
// update attr
newLi.className ="green"

// retrive
console.log(newLi.className)