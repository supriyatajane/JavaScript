let buttonA = document.querySelector('button')
let lilist = document.querySelectorAll('li')
let inputBox = document.querySelector('input')
console.log(inputBox)
//console.log(buttonA)
//console.log(lilist)
let ul = document.querySelector('ul')
//console.log('ul')

//add the buttons every li using javascript


for (let i = 0; i < lilist.length; i++) {
    lilist[i].style.color = "red"
    createButton(lilist[i])
    //lilist[i].style.color="red"
}




// add the value in the li
buttonA.addEventListener('click', function () {
    if (inputBox.value === "") {
        console.log('enter the text')
    }
    else {
        let text = inputBox.value
        let newElement = document.createElement('li')

        newElement.textContent = text
        createButton(newElement)

        ul.appendChild(newElement)
        inputBox.value = ''
    }
})


ul.addEventListener('click', function(e) {
    if (e.target.tagname === "BUTTON") {
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }


        if(e.target.className==="up")
        {
      let li=e.target.parentElement
      let ul=li.parentElement
      let prevli=li.previousElementSibling
      ul.insertBefore(li,prevli)
        }


        if(e.target.className==="down")
        {
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.nextElementSibling
            ul.insertBefore(prevli,li)
        }
    }



})




ul.addEventListener('click',function(e){
   
    if(e.target.tagName==="BUTTON"){
        if(e.target.className ==="remove"){
            
            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
    
   
        if(e.target.className ==="up"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.previousElementSibling          
          if(prevli!=null){
          ul.insertBefore(li,prevli)
          }
        }
    
   
        if(e.target.className==="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.nextElementSibling
          ul.insertBefore(prevli,li)
        }
    
    }
})


function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = "remove"
    remove.className = "remove"
    li.appendChild(remove)


    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "down"
    down.className = "down"
    li.appendChild(down)
}

