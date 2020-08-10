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

// ------------------------------------

//Асинхронность  EVENT LOOP / JS SETTIMEOUT

// *setTimeout

// console.log('start')

// function timeout2sec() {
//     console.log('timeout2sec')
// }

// window.setTimeout(function() {
//     console.log('inside timeout, after 5000 seconds')
// }, 5000)

// setTimeout(timeout2sec, 2000)

// console.log('end')

// console.log('start')

// setTimeout( function () {
//     console.log('SHow me again yu motherfucker')
// }, 2000)

// console.log('END')

// -----------------------

// Урок 5. JavaScript. Promise. Что это, как работает (+ пример)

// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
    
    // const backendData = {
    //     server: 'aws',
    //     port: 2000,
    //     status: 'working'
    // }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// Acum fix acelasi lucru ca si sus doar cu ajutorul "Promise"

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//       }
//       resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     console.log('promise resolved', data)
// })  [EXEMPLU NR 1]

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true
//         resolve(data)
//         // console.log('Data received', backendData)
//       }, 2000)
//     }).then(clientData => {
//         clientData.fromPromise = true
//         return clientData
//     }).then(data => {
//         console.log('Modified', data)
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'))
// })


// const sleep = ms => {
//    return new Promise(resolve => {
//        setTimeout(() => resolve(), ms)
//    })
// }

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log('All promises')
// })

// Promise.race([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log('race promises')
// })


// Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters

const person = Object.create(
{
    calculateAge() {
        console.log('age', new Date().getFullYear() - this.birthYear)
    }

},

{

    name: {
        value: 'Vladislav',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false

    },
    age:{
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'yellow'
            console.log('set age', value)
        }
    }
})

// person.name = "Maxim"

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
    
}

// Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)




