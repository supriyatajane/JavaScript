// program 1

let liList = document.querySelectorAll('li')// [li ,li ,li] // html element
let addButton = document.querySelector('button')
let ulList = document.querySelector('ul')
console.log(liList) 
console.log(addButton)

//<h2 class = "na" id="ba" name = "nmy">Fruits</h2> // object 
// addButton.addEventListener('click',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         //console.log(i)
//         //console.log(liList[i].textContent)
//         liList[i].textContent = "Apple"

//     }

// })


// Javascript 

// Html element --- create retrive update delete 
// Html element ---- create retrive update delete(remove)
//on user action --- click dbClick mouseover mouseout load

// let person = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// // 
// console.log(person.lastName)
// person.lastName = "amol"
// person.lang = "hello"
// delete person.lang



// program 2

 liList = document.querySelectorAll('li')// [li ,li ,li] // html element
 addButton = document.querySelector('button')
 console.log(liList) 


// addButton.addEventListener('click',function(){
//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "red"
//         liList[i].style.backgroundColor = "green"
//     }
    
// })


// program3
ulList.addEventListener('mouseover',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].style.color = "red"
        //liList[i].style.backgroundColor = "green"
    }
    
})

ulList.addEventListener('mouseout',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].style.color = "black"
        //liList[i].style.backgroundColor = "green"
    }
    
})









let person = {
    parents:{
        mother:"kanchan deshpande",
        father:"shrish deshpande",
        lastName:"dani"

    }

}

person.parents.lastName = "deshpande"






