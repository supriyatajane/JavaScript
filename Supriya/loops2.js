// for loop are use definite time 
// while loop are use indefinite time

//for 
for(i=10;i>=1;i--)
{
    console.log(i)
}

console.log("----------")
// for---> break
for(i=0;i<5;i++)
{
    console.log(i)
    if(i==4)
    {
        break
    }

}

console.log("---")
for(j=5;j>=0;j--)
{
    
    if(j==3)
    {
        break
    }
    console.log(j)
}

for(i=3;i<=30;i=i+3)
{
    console.log(i)
    {
        if(i==12)
        {
            continue
        }

    }
}


for(l=0;l<5;l++)
{
    if(l==3)
    {
        continue
    }
    console.log(l)
}

//while loop
console.log("---while --- loop")

k=0
while(k<=5)
{
    console.log(k)
    k++
}

j=5
while(j>=0)
{
    console.log(j)
    j--
}

console.log("----break while----continue")

h=6
while(h>=0)
{
    if(h==4)
    {
        break
    }
    console.log(h)
    h--
}

s=0
while(s<=5)
{
    console.log(s)
    if(s==3)
    {
        break
    }
    s++
}

let r=0
while(r<=9)
{
    if(r==6)
    {
        r++
        continue
    }
    console.log(r)
    r++
} 


//array practice
//problem 1
let year=[1999,2001,1990,1996]
let age=[]
for(i=0;i<year.length;i++)
{
    let dd=2022-year[i]
    age.push(dd)
}
console.log(age)

//problem2
let no=[22,4,5,66,55,33,35]
let above20=[]
for(i=0;i<no.length;i++)
{
    if(no[i]>20)
    {
        above20.push(no[i])
    }
}
console.log(above20)

//problem 3
let sums=[10,20,30,40]
sum=0
for(i=0;i<sums.length;i++)
{
    sum=sum+sums[i]
}
console.log(sum)

// problem 4
let city=['pune','mumbai']
for(i=0;i<city.length;i++)
{
    console.log(`welcome ${city[i]}`)
}