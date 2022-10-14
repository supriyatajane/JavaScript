console.log("hello")

//program1
 let liList=document.querySelectorAll('li')
console.log(liList)
let addButton=document.querySelector('button')
console.log(addButton)
let ulList=document.querySelector('ul')

//<h2 class="na" id="ba" name="nmy">fruits</h2> ---object
// text content all the value apple
// addButton.addEventListener('click',function(){
// for(let i=0;i<liList.length;i++)
// {
//     liList[i].textContent="apple"
// }
// })

//program2

liList=document.querySelectorAll('li')
addButton=document.querySelector('button')
console.log(liList)

// button click that time color change
// addButton.addEventListener('click',function(){
//     for(i=0;i<liList.length;i++)
//     {
//         liList[i].style.color="red"
//         liList[i].style.backgroundColor="black"
//     }
// })

//progarm3
ulList.addEventListener('mouseover',function(){
    for(i=0;i<liList.length;i++)
    {
        liList[i].style.color="red"
    }
})

ulList.addEventListener('mouseout',function(){
    for(let i=0;i<liList.length;i++)
    {
        liList[i].style.color="black"
    }
})