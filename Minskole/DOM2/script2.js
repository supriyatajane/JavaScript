let addButton = document.querySelector('#add')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')


let liList = document.querySelectorAll('li') // [li,li,li]

for(let i = 0 ; i < liList.length ; i++){
    createButton(liList[i])
}




addButton.addEventListener('click',function(){

    let newText = inputText.value
    let newLi = document.createElement('li') // <li><li>
    newLi.textContent = newText  // <li>Chikoo</li>
    createButton(newLi)
    ulList.appendChild(newLi)
})


function createButton(li){
    let remove = document.createElement('button')  // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class = remove>remove<button>
    li.appendChild(remove)


    let up = document.createElement('button')  // <button></button>
    up.textContent = "up" // <button>up</button>
    up.className = "up" // <button class = up>up<button>
    li.appendChild(up)


    let down = document.createElement('button')  // <button></button>
    down.textContent = "down" // <button>remove</button>
    down.className = "down" // <button class = remove>remove<button>
    li.appendChild(down)
 
}











// button 
// <button class = "remove">remove</button>
// <button class = "up">up</button>
// <button class = "down">down</button>


// create button 
// add text to button 
// add class attribute to button 
// add the button to li