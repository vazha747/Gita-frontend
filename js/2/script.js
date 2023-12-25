// function ფუნქციის_სახელი (პარამეტრი) {
//      ინსტრუქციები
// }

// ფუნქციის_სახელი(პარამეტრი)


// function sayHello() {
//     console.log("Hello" );
// }
// sayHello()



// function goodMorning(){
//     console.log("Good morning")
// }

// function goodEvning(){
//     console.log("Good evning")
// }

// let message = goodEvning

// message()
// // Good evning

// message = goodMorning

// message()

// Good morning



// function display(x) {
//     let z = x * x
//     document.write(z)
// }

// display(10)



// function display2(x, y) {
//     if ( y === undefined) {
//         y = x
//     } 
    
//     let z = x * y
//     document.write(z)
// }


// display2(10)


// function testArgs() {
//     console.log(arguments.length)

//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }


// testArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "test")




function displayMessage(x, func) {
    const message = func(x)

    document.write(message)
}


function welcomeMessage(time) {
    const data = "ola"
    console.log(data)
    if (time < 10) {
        return "Good morning"
    } else if (time < 20) {
        return "Good day"
    } else {
        return "Good evening"
    }
}


function data () {
  console.log("ola 2")
}
data()
displayMessage(13, welcomeMessage)




let z
function displaySquare() {
    const z = 20 
    console.log(z)
}
z = 10
displaySquare()
console.log(z)


// console.log(foo)
// const foo = "Tom"


// let c = a * b 
// const a = 7
// const b = 3

// console.log(c)


display()

function display() {
    console.log("Hello Hoisting")
}


const arrFunc = () => {
    console.log("Hello Arrow Function")
}

arrFunc()




function getFactorial(n) {
    if ( n === 1) {
        return 1
    } else {
        return n * getFactorial(n - 1)
    }
}


let result = getFactorial(5)
console.log(result)


///////////////// OOP //////////////////////

const user = {}

user.name = "Tom"
user.age = 26


user.display = function() {
    console.log(user.name)
    console.log(user.age)
}


user.display()


const user2 = {
    name:"Tom",
    age : 26,
    display: function() {
        console.log(this.name)
        console.log(this.age)
    }
}

user2.display()


const country = {
    name: "Switzerland",
    languages: ["German", "French", "Italian"],
    capital : {
        name: "Bern",
        population: 126598
    },
    cities : [
        {name: "Zurich", population: 402762},
        {name: "Geneva", population: 194565},
        {name: "Basel", population: 166209}
    ]
}
console.log(country)
document.write("<br>")
document.write(country.name)
document.write("<br>")
document.write("Switzerland official languages :")
document.write("<br>")


if (country.languages.length > 0) {
    country?.languages?.forEach(function(language) {
        document.write(language)
        document.write("<br>")
       }) 
} else {
    document.write("No languages")
}

country?.cities && country.cities.forEach(function(city) {
    document.write(city.name)
    document.write("<br>")
} )