let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')
let liList = document.querySelectorAll('li')
let headOne = document.querySelector('h1')


// console.log(headOne.textContent)
// console.log(headOne.classList)
// console.log(headOne.className)

console.log(ulList)
console.log(inputText)
console.log(buttonA)

 for(let i=0;i<liList.length;i++)
 {
     createButton(liList[i])
 }


buttonA.addEventListener('click',function(){
    if(inputText.value===""){}
    else{
    let text = inputText.value
    let liList = document.createElement('li') // <li></li>
    liList.textContent =  text
    createButton(liList)
    ulList.appendChild(liList)
    inputText.value=""}
})

ulList.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON"){
        if(e.target.className==="remove"){
        let li=e.target.parentElement
        let ul=li.parentElement
        ul.removeChild(li)
        }

        if(e.target.className==="up"){
        let li=e.target.parentElement
        let ul=li.parentElement
        let prevli=li.previousElementSibling
        ul.insertBefore(li,prevli)
        }

        if(e.target.className==="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.nextElementSibling
            ul.insertBefore(prevli,li)
        }
    }
    
})



function createButton(li)
{
    let r=document.createElement('button')//<button></button>
    r.textContent="remove"//<button>remove<button>
    r.classList="remove"//<button class="remove"></button>
    li.appendChild(r)


    let u=document.createElement('button')
    u.textContent="up"
    u.classList="up"
    li.appendChild(u)

    let d=document.createElement('button')
    d.textContent="down"
    d.classList="down"
    li.appendChild(d)

}

