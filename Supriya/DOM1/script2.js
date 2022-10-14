console.log("hello")

//   <p id="one" class="two" name ="three">para</p>

//tagname
let tagName=document.querySelector('p')
console.log(tagName)

//classname
let className=document.querySelector('.two')
console.log(className)

//id
let idName=document.querySelector('#one')
console.log(idName)

// tagName[attribute="value"] ==> css selector
let commonF=document.querySelector('p[name=three]')
console.log(commonF)

//<h1 class="four" id="five" name="six">Vegetables</h1>

//
let a=document.querySelector('#five')
let b=document.querySelector('.two')
let c=document.querySelector('h1')
let d=document.querySelector('h1[name=six]')

console.log(a)
console.log(b)
console.log(c)
console.log(d)

