
// object literal

let car={
    name:"tata motors",
    color:"red",
    milage:222,
    color:function()
    {
        console.log(this.milage.length)
    }

}
console.log(car)

// function contructor
let Bird=function(na,cl,leg)
{
    this.name=na
    this.color=cl
    this.legs=leg
    // this.display=function()
    // {
    //     console.log(this.name)
    // }
}

Bird.prototype. display=function()

{
    console.log(this.name)
}

let sf=new Bird("peacock","blue",4)
let fs=new Bird("sparrow","brown",2)
console.log(sf)
console.log(fs)

sf.display()
fs .display()


console.log(sf instanceof Bird)
console.log(fs instanceof Bird)

console.log(Bird.prototype)

console.log(sf._proto_===Bird.prototype)
//console.log(ram._proto_ === Person2.prototype)
console.log(fs._proto__===Bird.prototype)


let Flowers=function(na,cl,ty)
{
    this.name=na
    this.color=cl
    this.type=ty
}

Flowers.prototype.display=function()
{
    console.log(this.color)
}

Flowers.prototype.location="india"

let ret=new Flowers("rose","red",2)
let ret1=new Flowers("lotus","pink",4)

console.log(ret)
console.log(ret1.location)

ret.display()
ret1.display()

console.log(ret.hasOwnProperty("color"))
console.log(ret1.hasOwnProperty("location"))

console.log("--------")
console.log(ret._proto_===Flowers.prototype)
console.log(ret._proto_===Flowers.prototype)

console.log("----------------")


//array
let name=["riya","gopal","athrava","prasad"]
let city=["pune","mumbai","nagar","nasik"]

console.log(name.reverse())
console.log(city.sort())

console.log(name._proto_ === Array.prototype)

console.log(city._proto_===Array.prototype)


let Employee=function(ln,des,co,sk)
{
    this.lname=ln
    this.desgnation=des
    this.code=co
    this.skill=sk
}
