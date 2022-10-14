//<p id = "one" class = "two" name ="nm">para</p> 

// selecting the element =====> four


// by tagName 
let tagNameSelection = document.querySelector('p')
// class 
let classSelection = document.querySelector('.two')
// id selection 
let idSelection = document.querySelector('#three')
// tagName[attribute ="value"]
let commonWay = document.querySelector('p[name="nm"]')

console.log(tagNameSelection)
console.log(classSelection)
console.log(idSelection)
console.log(commonWay)


// javascript











// explain

// document.querySelector('h1').addEventListener('click',function(){
//     document.querySelector('h1').style.color = 'green'  
// })

// html --- text  <h1 id = "one" class ="two">Heading</h1>
// css - styling 
// javascrition -- click , dbclick mouseout mouseover

// class -- bsc chemistry  === common subjects 
// class    bsc physics    === common subject

// same -- unordered -- red green
// same -  ordered - purple black

/* <p id = "one" class = "two" name ="nm">para</p>  */