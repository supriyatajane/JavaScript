// Javascript is make the things dynamic

// Javascript ---> javascript 
//<p id="one" class="two" name="nm">Fruit List</p>
// Javascript - element add , element update , element retrive , element delete
// Javascript - element attribute update , element attribute delete,element  attribute add 
// Javascript element attribute retrive

//<p id="one" class="two" name="nm">Fruit list</p>
// 4 type element selected in javasript
// let id =document.querySelector('#one')
// console.log(id)

// let classs=document.querySelector('.two')
// console.log(classs)

// let cff=document.querySelector('p[name="nm"]')
// console.log(cff)

// let tagName=document.querySelector('p')
// console.log(tagName)

document.getElementsByClassName('two')
document.getElementById('one')

//update element
let id =document.querySelector('#one')
console.log(id)

id.textContent="Fruits'LIst"
console.log(id)

//delete element
let ulList=document.querySelector('#ullist')
console.log(ulList)

let firstElement=document.querySelectorAll('li')[0]
console.log(firstElement)
ulList.removeChild(firstElement)

//add element
let newli=document.createElement('li')
newli.textContent='chikoo'
newli.className='red'
ulList.appendChild(newli)


// attribute
newli.removeAttribute('class')

//adding the attribute
newli.className = "red"

//update attr
newli.className ="green"

console.log(newli)
