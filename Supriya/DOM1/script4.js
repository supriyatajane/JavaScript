console.log("hello")

//program 4
//program 4
// selecting the element 
// creat the li element with text in input
// based on useraction add the elemtn to the list


let ul=document.querySelector('ul')
let addButton=document.querySelector('button')
let inputText=document.querySelector('input')
console.log(ul)
let liList=document.querySelectorAll('li')


addButton.addEventListener('click',function(){
    let liText=inputText.value
    let newLi=document.createElement('li')// <li></li>
    newLi.textContent=liText // <li>mango</li>
    ul.appendChild(newLi)
    inputText.value=""

})

ul.addEventListener('mouseover',function(){
    for(let i=0;i<liList.length;i++)
    {
      liList[i].style.color="red"
    }
})

ul.addEventListener('mouseout',function(){
    for(let i=0;i<liList.length;i++)
    {
        liList[i].style.color="blue"
    }
})

addButton.addEventListener('click',function(){
    addButton.style.color="orange"
    addButton.style.backgroundColor="black"
}) 

inputText.addEventListener('click',function(){
    inputText.style.color="purple"
})

// //<input type="text" class="one" id="two">

// let cls=document.querySelector('.one')
// let id=document.querySelector('#two')
// let tex=document.querySelector('text')
//  console.log(cls)
//  console.log(id)
//  console.log(tex)