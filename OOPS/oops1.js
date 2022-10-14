

class Demo{
    constructor(fn,ln,ag)
    {
        this.fname=fn
        this.lname=ln
        this.age=ag
        // this.display=function()
        // {
        //     console.log(this.fname+" "+this.lname)
        // }
    }
}

let dd=new Demo('supriya','tajane',22)
let dv=new Demo('priya','tajane',29)
let dn=new Demo('diya','shrma',22)
console.log(dd)
console.log(dv)
console.log(dn)
console.log(dd.__proto__===Demo.prototype)
Demo.prototype.display=function()
{
    console.log(this.fname+" "+this.lname)
}

console.log(dv.__proto__===Demo.prototype)