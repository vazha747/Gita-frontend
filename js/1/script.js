// Logging data in javascript

// alert("Hello world")
// alert("Hello world2")

// console.log("Hello world")

// document.write("Hello world")


// Basic calculations in javascript

// alert("calculate value")

// var a = 5 + 8

// alert(a)

// var გლობალური ცვლადი რომელსაც შემიძლია რო ნებსმიერი ადგილიდან მივწვდე ან თავაზე გადავაწერპ
var a

a = 5
// const არის მუდმივა ცვლადი რომელსაც არ შეიძლება შევცვალო ან გადავაწერო, მაგრამ შეიძლება მივწვდე ნებსმიერი ადგილიდან
const b = 10


// let საკმაოდ გავს var ცვლადს მაგრამ შეიძლება რო შეიცვალოს მაგრამ თავისი ცხოვების გზა გააჩნია რაც ნიშნავს რომ { თუ მოვაქციე  } ამის გარეთ აღარასოდეს 
let  c = 15

// primitive data types

// string
var str = "Hello world"
// number
var num = 5
// boolean
var bool = true
//  undefined (ამ შემთხვევაში ცვლადი არსებობს მარა მნიშვნელობა არ აქვს)
var und = undefined
// null (ამ შემთხვევაში ცვალიც არ არსბეობს)
var nul = null

// NAN (არასწორი მნიშვნელობა ან იგივე რო not a number)
var nan = NaN

const first_name  = "Tom"

// console.log(typeof first_name)


const test_calc = 5 - 5 - "5" - 5


const write_text = "Giorgi" - " " - "Kalandadze"
// console.log(write_text)
// console.log(test_calc)

// == ადარებს მნიშვნელობებს 
const isEqual = 5 == "5"
// === იგივეობა და ადარებს როგორც მნიშვნელობებს ასევე ტიპებსაც
const isEqual2 = 5 === "5"



// let strSum = prompt("Enter loan money", 1000)
// let strPercent = prompt("Enter percent", 10)

// let sum = parseInt(strSum)
// let percent = parseInt(strPercent)

// sum = sum + sum * percent / 100

// document.write("after Percent your money will be" + sum)

// || ან კონსტრუქცია
//  && და კონსტრუქცია


// let income = prompt("Enter your income", 1000)
// let age = prompt("Enter your age", 30)

const income = 1000
const age = 20
if (income >= 1000 && age <= 45) {
    console.log("You are rich and young")
} else if (income >= 500 && age <= 25) {
    console.log("You are not as rich but you are young")
} else if (income >= 200 && age <= 20) {
    console.log("You are not as rich but you are young as hell")
} else if (income <= 100 && age <= 30) {
    console.log("You are not rich and not young")
} else {
    console.log("You are not rich and not young 2")
}




switch(income) {
    case 100 : 
        console.log("You are rich")
        break
    case 200 :
        console.log("You are not rich")
        break
    default : 
        console.log("You are not rich and not young")
        break
}


let z = 1
let x = 2

let result = z < x ? z+x : z-x

if (z< x) {
    result = z+x
} else {
    result = z-x
}

console.log(result)


const people = [
    "Tom",
    "Alice",
    "Bob",
]
console.log(people[4])
people[4] = "John"

console.log(people[4])


// const numbers2 = [
//     [1,2,3],
//     [4,5,6],
// ]

// const people2 = [
//     ["Tom", 25, false],
//     ["Alice", 30, true],
//     ["Bob", 20, false],     
// ]
// console.log(people2[0][0])
// console.log(people2[1][0])

// Reverse array in javascript

const arr = [1,2,3,4,5,6,7,8,9,10]
arr.reverse()
console.log(arr)


function reverseArray(arr) {
    for (let i =0; i<arr.length/2; i++) {
        // swap elements
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
}
 return arr
}

let myArr = [1,2,3,4,5,6,7,8,9,10]

reveredArray = reverseArray(myArr)

console.log(reveredArray)


function reverseSting(str){
    return str.split("").reverse().join("")
}

let myString = "Hello world"

let reversedString = reverseSting(myString)
console.log(reversedString)

let myArr1 = [1,2,3,4,5,6,7,8,9,10]

let myArr2 = [11,12,13,14,15,16,17,18,19,20]

let mergedArr = myArr1.concat(myArr2)


let mergedArr2 = [...myArr1, ...myArr2]