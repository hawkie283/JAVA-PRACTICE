//1.1) Crearea de obiect  "PROTOTYPE"- acesta este un obiect specific, care este prezent în obiecte și este numit(vizivaetsa) de-a lungul lanțului de sus în jos.
// 1.2) Inauntru la obiect noi pute crea diverse functii 

//1.1 const person  = {  
//     name: "Maxim",
//     age: "25",
//     greet: function() {
//         console.log("Greet!")
//     }
//  EXEMPLU NR 1 }

// const person = new Object( {
//     name: "Maxim",
//     age: "25",
//     greet: function() {
//     console.log("Greet!")
//   }
// })

// Object.prototype.sayHello = function() {
//     console.log("Hello")
// }

// --------------------------

// const lena = Object.create(person)
//  lena.name = "Elena";

// const str = "I am string"

// const str = new String("I am string")


// CONTEXT IN JAVA SCRIPT - Call, bind, apply (3.0)
// 3.0 START ( METODA NR.1 ----- " BIND ")
 function hello() {
   console.log("Hello", this)
 }

 const person = {
     name: 'Vladilen',
     age: 25,
     sayHello: hello,
     sayHelloWindow: hello.bind(document),
     logInfo: function(job, phone) {
         console.group(`${this.name} info`)
         console.log (`Name is ${this.name}`)
         console.log (`Age is ${this.age}`)
         console.log(`Job is ${job}`)
         console.log(`Phone is ${phone}`)
         console.groupEnd()
     }
 }

 const lena = {
     name: 'Elena',
     age: '18',

 }

//  const fnLenaInfoLog =  person.logInfo.bind(lena)
//  fnLenaInfoLog( "Frontend", "8-999-02-13")            [ EXEMPLU NR.1 ]

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-02-13')()   [ EXEMPLU NR.2 ]

// METODA NR 2 " CALL "

// person.logInfo.call(lena, 'Frontend', '8-999-02-13')  [EXEMPLU NR.3]

// METODA NR 3 "APPLY"

person.logInfo.apply(lena, ['Frontend', '8-999-02-13'])

///=========================


// COMBINAREA DE CONTEXT SI PROTOTYPE
// 1. Metoda map

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {    
//         return i * n
//     })
// }     [este doar exemplu, dar urmeaza ex mai jos in care poate fi intrebarea, "Care metoda poti folosi pentru masivul dat ca sai alerte functia"]

// console.log(multBy(array, 15))

Array.prototype.multBy = function (n) {
    return this.map(function(i) {    
    return i * n
 })
    // console.log('multBy', this)
}

console.log(array.multBy(20))  

// [DE MAI UITAT ACASA INCA ODATA METODA DATA ]



// METODA ЗАМЫКАНИЯ ( ФУНКИЯ ВНУТРИ ДРУГОЙ ФУНКИЙ)



// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1) 
// const addTen = createIncrementor(10)

// console.log(addOne(10))

// console.log(addTen(100))

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
console.log(comUrl ('facebook'))
console.log(comUrl ('netflix'))
console.log(comUrl ('youtube'))
console.log(comUrl ('vk'))

const ruUrl = urlGenerator('ru')
console.log(ruUrl ('vk'))
console.log(ruUrl ('yandex'))






// ----------------------------------------------------------------

function bind(context, fn) {
    return function(...args){
        fn.apply(context, args)
    }
}


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Michael', age: '22', job: 'Frontend' }
const person2 = { name: 'Helen', age: '30', job: 'Backend' }

bind(person1, logPerson)()
bind(person2, logPerson)()

// NEXT JAVA NR 4





