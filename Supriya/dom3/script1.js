let buttonA=document.querySelector('button')
let lilist=document.querySelectorAll('li')
let inputBox=document.querySelector('input')
console.log(inputBox)
//console.log(buttonA)
console.log(lilist)
let ul=document.querySelector('ul')
console.log('ul')


//if your mouseover then change the li element and and every text apple
// buttonA.addEventListener('mouseover',function(){
//     for(let i=0;i<lilist.length;i++)
//     {
//         lilist[i].style.color="red"
//         lilist[i].style.background="black"
//         lilist[i].textContent='apple'
//     }
// })


// // this is if you type color textbox then change color ui
// buttonA.addEventListener('click',function(){
//     let colorText=inputBox.value
//     ul.style.color=colorText
//     inputBox.value=""
// })

buttonA.addEventListener('click',function(){
    if(inputBox.value===""){
        console.log('enter the text')
    }
    else{
    let text=inputBox.value
    let newElement=document.createElement('li')
    newElement.textContent=text
    ul.appendChild(newElement)
    inputBox.value=''}
})