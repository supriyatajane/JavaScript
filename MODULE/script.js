
//first way
import { addition } from "./shop.js";
addition(10, 20)

import { person } from "./shop.js";

console.log(person.firstName)

//second way

import { addition as add, person as per } from "./shop.js";

add(2, 3)
console.log(per.lastName)

//third way
import * as abc from "./shop.js"

abc.addition(100, 200)
console.log(abc.person)


import h from "./shop.js"
console.log(h[0])

import s from "./shop.js"
console.log(s.athrva)


//async await function use async code execute sync we dont use .then then use async await 

function getusercreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("userCreated")
        }, 3000)
    })
}

function getuserName() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("userName")
        }, 2000)
    })
}

function geuserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('userInfo')
        }, 1000)
    })
}

async function GetInfo() {
    let a = await getusercreated()
    console.log(a)

    let b = await getuserName()
    console.log(b)

    let c = await geuserInfo()
    return c

}
GetInfo().then(function(a){
    console.log(a)
})

let c=await GetInfo()
console.log(c)