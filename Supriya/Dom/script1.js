//<p id = "one" class = "two" name ="nm">para</p> 


// by tagname
let tagname=document.querySelector('p')
console.log(tagname)

//id
let idName=document.querySelector('#two')
console.log(idName)

//class
let classSelection=document.querySelector('.two')
console.log(classSelection)

//tagname[attribute=value]
let commonWay=document.querySelector('p[name=nm]')
console.log(commonWay)