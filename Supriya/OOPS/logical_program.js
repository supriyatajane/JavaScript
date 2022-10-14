// class

class Person
{
    constructor(firstName,lastName,city,marks)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.city=city
        this.marks=marks
    }

calpercentage()


 {
  return (this.marks.reduce(function (acc, el) {
      return acc + el
    }, 0) / 500) * 100
}

static greeting()
{

}

}

let marks=[[100,90,80,80,90],[70,70,70,70,70],[60,50,60,50,40],[30,40,50,50,50],[55,55,55,33,44]]

let student=[]
for(i=0;i<5;i++)
{
    let obj=new Person(`om-${i+1}`,`rao-${i+1}`,`city-${i+1}`,marks[i])
    student.push(obj)
}
console.log(student)
//student.calpercentage()

console.log("--------percentage------------")
let percentArray=[]
for( let i=0;i<student.length;i++)
{
    percentArray.push(student[i].calpercentage())
}
console.log(percentArray)


 console.log(percentArray.reduce(function(acc,el){

     return acc+el
 },0)/student.length)

// // print the first name
 student.forEach(function(el,index){
     console.log(el.firstName)
 })

// //last name
 student.forEach(function(el,index){
     console.log(el.lastName)
 })
console.log("-------------------------")
// //
student.forEach(function(el,index){
     console.log(el.firstName+" "+el.calpercentage())
 })

 // min max
 console.log(percentArray)
 h=percentArray
 max=h[0]
 min=h[0]

for(let i=0;i<h.length;i++)
{
 if(h[i]<min)
 {
     min=h[i]
 }
 else if(h[i]>max)
 {
max=h[i]
 }}
 console.log(min)
 console.log(max)

 console.log(student.find(function(el,index){

    return el.calpercentage()==min
 }).firstName)

 console.log(student.find(function(el,index){
     return el.calpercentage()==max
 }).firstName)

 student.forEach(function(el,index){
     el.lang="English"
 })
 console.log(student)


 // 
 class Emp
 {
     constructor(name,lname,age)
     {
         this.name=name
         this.lname=lname
         this.age=age
     }
 }
 let owner=[
     new Emp('supriya','tajane',23),
     new Emp('sarika','pansare',23),
     new Emp('poonam','shinde',34),
     new Emp('sara','khan',33)
 ]
 console.log(owner)


 //
 let aa=[10,1,100,5,6,3]
 
// points.sort(function(a, b){return b - a});
 let bb=aa.sort(function(a,b){
     return a-b
 })
 console.log(bb)