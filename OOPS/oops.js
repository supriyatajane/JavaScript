//we can create objact different way
//object literals
//function contructor
//es6 class
//object.create


let obj={
    firstname:"supriya",
    lastname:'tajane',
    age:22,
    display:function()
    {
    console.log(this.firstname+" "+this.lastname)
    }
}
obj.display()


let obj2={
    firstname:'abhijit',
    lastname:'tajane',
    age:21,
    display:function()
    {
        console.log(this.age)
    }
}
obj2.display()



//function contructior

function Person(name,lname,id)
{
    this.name=name
    this.lname=lname
    this.id=id
    this.display=function()
    {
        console.log(this.id)
    }
}
let pp=new Person('satya','nadela',123)
pp.display()




console.log(pp)


function Car(color,name,speed)
{
    this.color=color
    this.name=name
    this.speed=speed
    this.start=function()
    {
        console.log(this.color)
    }
    this.stop=function()
    {
        console.log(this.speed)
    }
}
let cc=new Car('black','TVTV',2000)
cc.start()
cc.stop()



//Es6 class
class Fashion
{
    constructor(color,type,size)
    {
        this.color=color
        this.type=type
        this.size=size
        this.display=function()
        {
            console.log(this.color)
        }

    }
    display()
    {
        console.log(this.color)
    }
}
let ff=new Fashion('red', 'modern','XL')
console.log(ff)

ff.display()
//creting multiple object
let fs=[
    new Fashion('red', 'modern','XL'),
    new Fashion('blue', 'old','LL'),
    new Fashion('blue', 'stylish','XL'),
    new Fashion('white', 'modern','XL'),
    new Fashion('redish', 'modern','XL')
]
console.log(fs)
fs.forEach(function(el){
    for(let key in el)
    {
        console.log(key,el[key])
    }
})



let fd={
    va:new Fashion('red', 'modern','XL'),
    vb:new Fashion('blue', 'old','LL'),
    vc:new Fashion('blue', 'stylish','XL'),
    vd:new Fashion('white', 'modern','XL'),
    vn:new Fashion('redish', 'modern','XL')

}
for(let values of Object.values(Fashion))
{
    for(let key in values)
    {
        console.log(key,values[key])
    }
}


//object.create
let o={
    init:function(fn,ln)
    {
        this.fn=fn
        this.ln=ln
        this.display=function()
        {
            console.log(fn+" "+ln)
        }
    }

}

let c=Object.create(o)
c.init('sara','karn')
console.log(c)



