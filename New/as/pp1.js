let info =  {
    firstName:"harikesh",
    lastName:"prasad",
    city:"Nagpur",
    siblings:{
        brother:"ankit",
        sister:"ankita"
    },
    skills:["python","javscript","css"]

}


//console.log(info['firstName'])
//console.log(info.firstName)
//console.log(info.siblings.sister)


console.log(info.skills.slice(0,2))
//console.log(info.skills[info.skills.length-1])
// info.forEach(function(el,index){
//     console.log(el.skills)
// })
// let sa=info
// sa.forEach(function(el){
//     console.log(el.fullName+" "+el.city)
// })


let arr=[11,22,33]
let oo=arr.map(function(el,index){
    return el*2
})
console.log(oo)


