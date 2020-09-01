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

// if else statement.....

// var classTemperature = 80; 
// initial este scris '100' pentru ca variabila sa fie adevarata, dupa ce a fost modificat cu cifra 80

// if (classTemperature == 100) {
//     classTemperature = classTemperature - 20;

//     document.write ('ClassTemperature just changed to' + classTemperature + "<br>")
// }

// document.write('outside of if statement')


// if ... else statement

// var classTemperature = 80; 

// if (classTemperature == 100) {
//     classTemperature = classTemperature - 20;

//     document.write ('ClassTemperature just changed to' + classTemperature + "<br>")
// } else {
//     document.write ('No need to change this statement')
// }



// var classTemperature = 80; 

// if (classTemperature == 100) {
//     classTemperature = classTemperature - 20;

//     document.write ('ClassTemperature just changed to' + classTemperature + "<br>")
// } else if (classTemperature == 80) {
//     classTemperature = classTemperature -10;
//     document.write ('ClassTemperature just changed to' + classTemperature + "<br>")
// } else {
//     document.write ('No need to change')
// }

// ''Ternary operator EXAMPLE''

// var classTemperature = 70;

// var classTemperatureStatus = (classTemperature == 100) ? classTemperature - 20 : classTemperature;

// document.write("Class current temperature is" + classTemperatureStatus + '<br>');

// ''--------- JAVA SCRIPT CONDITIOND AND DECISIONS
// COMPARISION OPERATORS: ==; ===; !=; !==, <, >, <=, >= ''

// == EQUAL To
// === EQUAL VALUE & Type
// != NOT EQUAL To
// !== NOT EQUAL VALUE & NOT TYPE 
// >  GREATER THAN  
// < LESS THAN  
// >= GREATER THAN EQUAL TO  
// <= LESS THAN EQUAL TO 


// var studentAge = "18";

//equal to 

 /*if (studentAge == 18) {
    document.write("Student age value is equal to 18 <br>")
}


// EQUAL VALUE & Type

if (studentAge === 18) {
    document.write("Student age value and type is equal to 18 <br>")
} */

// NOT EQUAL To

// var studentAge = "18";

// if (studentAge != 18) {
//     document.write("Student age value and type is not equal to 18 <br>")
// }



// NOT EQUAL VALUE & NOT TYPE 

// if (studentAge !== 18) {
//     document.write("Student age value or type is not same <br>")
// }


// GREATER THAN  

// var studentAge = 15;

// if (studentAge > 18) {
//     document.write("Student age value is greater than 18 <br>")
// }

// // LESS THAN  

// if (studentAge < 18) {
//     document.write("Student age value is less than 18 <br>")
// }


// // GREATER THAN EQUAL TO 
// if (studentAge >= 18) {
//     document.write("Student age value is greater than or equal to 18 <br>")
// }

// // LESS THAN EQUAL TO 
// if (studentAge <= 18) {
//     document.write("Student age value is less than or equal to 18 <br>")
// }



// ''---- LOGICAL OPERATORTS IN JAVA SCRIPT ''

// && - AND
// || - OR 
// ! - NOT

// LOGICAL AND OPERATOR
// var studentAge = 20;
// var studentGenedar = "F" /*M for male */

// if ( ( studentAge >= 18 ) && ( studentGenedar == "M" ) ) {
//     document.write("Student age is greater than or equal to 18 and student genedar is male <br>");
// }

// // LOGICAL OR OPERATOR

// var studentGenedar = "F" /*M for male */

// if ( ( studentAge >= 18 ) || ( studentGenedar == "M" ) ) {
//     document.write("Student age is greater than or equal to 18 OR student genedar is male <br>");
// }

// // LOGICAL NOT OPERATOR

// if (! ( studentAge > 18 )) {
//     document.write('Student age is less than 18');
// }

// TEST (Scrieți un program JavaScript pentru a găsi cel mai mare număr dintre trei numere. Afișați tasta
//     numărul cel mai mare folosind document.write.  NUMERE = 15 ,7, 3)  

// var x = 15, y = 7, z = 3;

// if ( ( x > y ) && (y > z) ) {
//     document.write("the largest number is" + x );
// } else if ( (x > y) && (y > z)) {
//    document.write('the largest number' + y );
// } else {
//     document.write("the largest number is" + z );
// }

//------------ SWITCH (intrerupator) OPERATOR

// var studentGrade = "B";

// if( studentGrade == "A") {
//     document.write("Grade A student");
// } else if (studentGrade == "B") {
//     document.write("Grade B student");
// } else if ( studentGrade == "C") {
//     document.write("Grade C student");
// } else {
//     document.write("NO GRADE FOUND");
// };

// switch ( studentGrade ) {
    
//     case "A":
//         document.write("Studen with grade A <br>");
//         break;
//     case "B":
//         document.write("Studen with grade B <br>");
//         break;
//     case "C":
//         document.write("Studen with grade C <br>");
//         break;
//     default:
//         document.write("No data found");
// }



// LOOPS JAVASCRIPT  
// document.write('While Loop <br>');
// var x = 1;

// while ( x <= 5) {
//     document.write(x + '<br>');

//     x++;
// }

// document.write('Do while Loop <br>');
// var y = 6;

// do {

//     document.write(y + '<br>');
//     y++;

// } while ( y <= 5);


// document.write('FOR Loop <br>');

// for ( z = 1; z <= 5; z++ ) {
//     document.write(z + '<br>');
// }


// Scrieți un cod JavaScript pentru buclă care va itera de la 0 la 10. În fiecare iterație, verificați dacă
// numar curent. dacă numărul curent este par, afișați „X este par” sau dacă este impar, afișați „X este
// Ciudat ”. Utilizați document.write pentru afișare.

// for ( var z = 0; z <= 10; z++ ) {
      
//     if ( z === 0 ) {
      
//       document.write(z + " is Even <br><br>");
      
      
//     } else if ( z % 2 === 0 ) {
      
//       document.write(z + " is Even <br><br>");
      
      
//     } else {
      
//       document.write(z + " is Odd <br><br>");
      
//     }
    
//   }

// document.write(' Break: <br>');
// var i;

// for ( i = 1; i <= 10; i++) {

//     if ( i == 8) {
//         break;
//     }
    
   
//     document.write(i+ '<br>');

// }

// document.write(' Continue: <br>');

// var i;

// for ( i = 1; i <= 10; i++) {

//     if ( i == 5) {
        
//         continue;
//     }
    
   
//     document.write(i+ '<br>');

// }



// function myFirstFunction() {

//     document.write("code execution inside function");
// }

// myFirstFunction();

// ---JAVA SCRIPT FUNCTIONS WITH PARAMETERS & RETURN

// FUNCTION WITH PARAMETERS

// function functionWithParameters (p1, p2) {

//     var z = p1 * p2;

//     document.write("p1 * p2 = " + z + "<br>")
// }

// functionWithParameters (10, 20);

// accept function as value

// function parameterAsFunction (func) {

//     func();

// }

// parameterAsFunction(helloWorld);

// function helloWorld() {
//     alert("Hello World! Function passed as an argument.");
// }

// function with return statment

// function returnSum (x, y) {
//     var z = x + y;

//     return z;
// }

// var result =  returnSum(10, 20);

// document.write('Return value:' + result);

// document.write('Returned value:' + returnSum(10, 20));

// --- Function as variable & anonymous function

// function sum(x, y) {

//     return (x + y);

// }

// assign a function to a variable

// var s = sum;

// var r = s(10, 20);

// document.write(r + "<br>");


// define function without a name 
// anonymous function

// var isAdult = function(age) {

//     if ( age >= 18) {

//         return "yes";

//     } else {

//         return "No";
//     }
// };

// var k = isAdult(25);

// document.write("adult status:" + k);

// -- JAVA SCRIPT SELF EXECUTING ANONYMUS FUNCTION
// Self executing anonymus function

// (function() {

//     alert("Auto show message.");

// })();

// alternate syntax

// (function () {

//     alert("hello man");


// }());

// pass argument to self execution function (trece argumentul la funcția de autoexecutare)

// (function(x, y) {

//     alert("sOME OF X & Y" + (x + y));

// })(10, 20);


// Self executing function with return

// var sum =  (function(x, y) {

//     return (x + y);

// })(10, 50);

// alert("Returned Sum:" + sum);


// global scope
var x = 20;

function myFunction1() {

    // alert("x =" + x + "accesed inside of a function");


}

myFunction1();

// alert("x = " + x + "accesed outside of a function");


function  myFunction2() {

    // local scope variable
    var y = 50;

    document.write("y = " + y + "accessed inside of a function")

}
myFunction2();

// document.write("y = " + y + "outside of a function")

function  myFunction3() {

    // automatically global - just by initialization
    var z = 100;

    document.write("z = " + z + "accessed inside of a function")

}
myFunction3();



