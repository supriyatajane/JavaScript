let btn=document.querySelector('#btnid')
let liList=document.querySelectorAll('li')
let ul=document .querySelector('ul')
let texte=document.querySelector('input')




for(let i=0;i<liList.length;i++)
{
    createButton(liList[i])
}

btn.addEventListener('click',function(){
    if(texte.value==""){}
    else{
     let text=texte.value
     let a=document.createElement('li')//<li><li>
     a.textContent=text
     createButton(a)
     ul.appendChild(a)
     texte.value=""
}
})
ul.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON")
    {
        if(e.target.className==="remove")
        {
            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }

        if(e.target.className==="up")
        {
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.previousElementSibling
            if(prevli!=null){
            ul.insertBefore(li,prevli)}
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


function createButton(li)
{
    let addbtn=document.createElement('button')
    addbtn.textContent="remove"
    addbtn.className="remove"
    li.appendChild(addbtn)

    let upbtn=document.createElement('button')
    upbtn.textContent="up"
    upbtn.className="up"
    li.appendChild(upbtn)

    let downBtn=document.createElement('button')
    downBtn.textContent="down"
    downBtn.className="down"
    li.appendChild(downBtn)

}