'use strict';
//default parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 100);
// createBooking('LH123', 5);
// createBooking('LH123', 10);
// createBooking('LH123', undefined, 10);

//---------------------------------------

//How passing arguments work: value vs reference
// const flight = 'LH123';
// const newarr = [1, 2, 3];
// const neil = {
//   name: 'Neil Juneja',
//   passport: 1234567890,
// };
// const checkIn = function (flightNum, passenger, arr) {
//   flightNum = 'AS456';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 1234567890) {
//     alert('Checked In');
//   } else alert('Wrong Passport');
//   arr[0] = 4;
// };
// checkIn(flight, neil, newarr);
// console.log(flight);
// console.log(neil);
// console.log(newarr);

// const newPassport = function (person) {
//   return (person.passport = Math.trunc(Math.random() * 1000000000));
// };
// console.log(newPassport(neil));
// checkIn(flight, neil, newarr);

//---------------------------------------
//Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// console.log(oneWord('Neil Juneja Mabiu'));

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// console.log(upperFirstWord('Neil Juneja Mabiu'));

// // //Higher Order Functions
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
//   console.log('---------------------');
// };
// transformer('Javascript is Fun!', upperFirstWord);
// transformer('Javascript is Fun!', oneWord);

// const high5 = function () {
//   console.log('🥳');
// };
// document.body.addEventListener('click', high5);

// ['Neil', 'Mabiu', 'Juneja', 'Shaqibul'].forEach(high5);

//---------------------------------------
//Functions Returning Functions
//function currying" বা "closure
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('hey');
// greeterHey('Neil');
// greeterHey('Juneja');
// //or
// greet('Hello')('Neil');

//using arrow
// const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);

// const greeterHey2 = greet2('bye');
// greeterHey2('neva');
//----------
// const ageChecker = function (birthyear) {
//   const age = 2025 - birthyear;
//   return function (name) {
//     console.log(`${name} is ${age} years old`);
//   };
// };
// const ageStr = ageChecker(1992);
// ageStr('Neil');
//ageChecker(1992)('Neil');
//----------
// const greet = language => name => {
//   if (language === 'English') {
//     console.log(`Hello ${name}`);
//   } else if (language === 'Spanish') {
//     console.log(`Hola ${name}`);
//   }
// };
// greet('Spanish')('Neil');
//------------
// const greet = function (greeting) {
//   return function (name) {
//     return function (emoji) {
//       console.log(`${greeting}, ${name} ${emoji}`);
//     };
//   };
// };
// const greeter = greet('Hey');
// const nameGreeter = greeter('Neil');
// nameGreeter('😎');
// greet('Hola')('Juueja')('😎');
//----------------
// const multiply = function (number1) {
//   return function (number2) {
//     return function (number3) {
//       const newNumber = number1 * number2 * number3;
//       console.log(newNumber);
//     };
//   };
// };
// multiply(2)(3)(4);
//-----------
// const conditionalGreet = function (time) {
//   return function (name) {
//     return function (smile) {
//       if (smile) {
//         console.log(`Good ${time}, ${name} ☺️`);
//       } else {
//         console.log(`Good ${time}, ${name}`);
//       }
//     };
//   };
// };
// conditionalGreet('morning')('Neil')(true);
// conditionalGreet('morning')('Neil')(false);

//------------------------------------------------
//the call & apply method (this keyword)

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function() ...or,
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a flight on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };
//lufthansa.book(239, 'Neil Juneja');
//lufthansa.book(932, 'Juneja Neil');
//console.log(lufthansa); // console.log(object) মানে হচ্ছে reference print পরে যদি object এ কোনো কিছু পরিবর্তন হয়, log খোলার সময় তাও reflect করে

//after some yr lufthansa group create a new airline
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
//call method
// const book = lufthansa.book;
//book.call(eurowings, 239, 'Neil Juneja');
//console.log(eurowings);

//book.call(lufthansa, 275, 'Neil Juneja');
//console.log(lufthansa);
// const swiss = {
//   airline: 'Swiss Air line',
//   iataCode: 'SW',
//   bookings: [],
// };
//book.call(swiss, 75, 'Neil Juneja');
//console.log(swiss);

//Apply Method
// const flightData = [445, 'Neil'];
// book.apply(swiss, flightData); //not used now instead use call
//book.call(swiss, ...flightData);

//Bind Method
//book.call(eurowings, 239, 'Neil Juneja');
// const bookEW = book.bind(eurowings);
// bookEW(52, 'Rahmat Khan');
//console.log(eurowings);

// const bookLF = book.bind(lufthansa);
// bookLF(35, 'Karim Khan');
// console.log(lufthansa);

// const bookSW = book.bind(swiss);
// bookSW(12, 'Jamal Khan');
// console.log(swiss);

//fixing one argument
// const bookEW15 = book.bind(eurowings, 15); // setting the flight number before.
// bookEW15('Jonas');
// bookEW15('Maria');

// const bookEW151 = book.bind(eurowings, 15, 'Neil'); //this way full function is set u cant change anything when calling the function
// bookEW151();

//bind method with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//Parial Application
// const addTAX = (rate, value) => value + value * rate;
// console.log(addTAX(0.1, 200));
// const addVAT = addTAX.bind(null, 0.23);
// same as addVAT = value => value + value * 0.23; its standard
// console.log(addVAT(100));
// console.log(addVAT(10));

//Using function returning function same result without using bind
// const addTAXRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// console.log(addTAXRate(0.23)(100));
// console.log(addTAXRate(0.23)(10));
//or
// const addVat2 = addTAXRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(10));

// const names = {
//   firstName: 'Neil',
//   lastName: 'Juneja',
// };
// const printName = function (hometown, state, country) {
//   console.log(
//     this.firstName +
//       ' ' +
//       this.lastName +
//       ' ' +
//       hometown +
//       ' ' +
//       state +
//       ' ' +
//       country
//   );
// };
// const printMyName = printName.bind(names, 'Bhola');
// printMyName('Dhaka', 'BD');

// //creating my own bind
// Function.prototype.mybind = function (...args) {
//   let obj = this; //this এখানে হচ্ছে যে ফাংশনটা bind করতে চাও — মানে printName
//   let params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };
// const printMyName2 = printName.mybind(names, 'Bhola');
// printMyName2('Dhaka', 'BD');

//-----------------------Coding Challenge 1 ---------------------------

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// Updated Version
// const poll = {
//   question: `What is your favourite programming language?`,
//   options: [`0 : JavaScript`, `1 : Python`, `2 :  Rust`, `3 : C++`],
//   answers: new Array(4).fill(0),
//   //This generates a new array with [0,0,0,0]
//   registerNewAnswer() {
//     //Get answer
//     let input = prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
//     );
//     //Cancel check
//     if (input === null) {
//       alert(`You exited the Poll`);
//       return;
//     }
//     //Register Answer
//     const answer = Number(input);
//     if (
//       Number.isInteger(answer) &&
//       answer >= 0 &&
//       answer < this.answers.length
//     ) {
//       this.answers[answer]++;
//     } else {
//       alert(`Not a Valid Number`);
//     }
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll Results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // {answers: [5, 2, 3]} is the new object created for call method. as call's 1st parameter is obj name and 2nd one 'string is the argument.
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//Using ternary
// const poll = {
//   question: `What is your favourite programming language?`,
//   options: [`0 : JavaScript`, `1 : Python`, `2 :  Rust`, `3 : C++`],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //get answer
//     let input = prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     );
//     //cancel check
//     if (input === null) {
//       alert('You exited the poll');
//       return;
//     } else if (input === '') {
//       alert('Please Provide a valid Number');
//       return;
//     }
//     const answer = Number(input);

//     //valid answer check

//     Number.isInteger(answer) && answer < this.answers.length && answer >= 0
//       ? this.answers[answer]++
//       : alert('Please choose between the option numbers');

//     this.displayResults('array');
//     this.displayResults('string');
//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else {
//       console.log(`${this.answers}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] }, '');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//-------------------------------------
//Immediately Invoked Function Expressions (IIFE) not much used today. only used to hide variables declared with var as
//this function can run multiple times
// const runFunction = function () {
//   console.log(`this function can run multiple times`);
// };
// runFunction();

// //this function can run one time
// (function () {
//   console.log(`this function can run one time`);
// })();
// //with arrow
// (() => console.log(`this arrow function can run one time`))();

//-----------------------------------
//Closures
//ral life scenerio
// function clickHandler(color) {
//document.body.style.backgroundColor = `${color}` /just atuk e likhle kaj korbena. function return korte hbe
//   return function () {
//     document.body.style.backgroundColor = `${color}`;
//   };
// }
// document.getElementById('orange').onclick = clickHandler('orange');
// document.getElementById('green').onclick = clickHandler('green');
// document.getElementById('previous').onclick = clickHandler('olive');

// const secureBooking = function () {
//   let personCount = 0;

//   return function () {
//     personCount++;
//     console.log(`${personCount} Passengers`);
//   };
// };
// secureBooking()(); //1 Passengers
// secureBooking()(); //1 Passengers
// secureBooking()(); //1 Passengers
// /* প্রতিবার secureBooking() call করলে:
// নতুন একটা personCount তৈরি হচ্ছে (let personCount = 0)
// তারপর সেই scope-এ একটা নতুন function return হচ্ছে
// এবং আমরা সাথে সাথে সেটাকে call করে দিচ্ছি
// 👉 তাই প্রতিবারই personCount আবার ০ থেকে শুরু হচ্ছে
// সেজন্য output হয়:
// 1 Passengers
// 1 Passengers
// 1 Passengers */
// const booker = secureBooking();
// booker(); //1 Passengers
// booker(); //2 Passengers
// booker(); //3 Passengers
// /* secureBooking() একবারই call হয়েছে
// তার মানে personCount = 0 একবারই তৈরি হয়েছে
// সেই একটাই closure ভেতর থেকে তিনবার booker() call করছি
// প্রত্যেকবার personCount++ হচ্ছে
// ✅ তাই output হয়:
// 1 Passengers
// 2 Passengers
// 3 Passengers ✅
// ✅ So, উত্তর:
// booker() প্রতি বার call করার সময় আগের personCount মনে রেখেছে কারণ সে তার lexical scope-এ থাকা variable গুলো মনে রাখে (Closure)।
// এবং সেটা বদলাতেও পারে, কারণ সে সেই variable এর reference ধরে রাখে — শুধু value না। */
// console.dir(booker);

//More Closure Examples

//Closure Example 1: Variable Reassignment দিয়ে Closure
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 7;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// //reassigned f function
// h();
// f();
// console.dir(f);
//এখানে closure হচ্ছে কারণ f() যখন কল হচ্ছে তখন তার parent function (g বা h) অনেক আগেই execute হয়ে গিয়েছে, তাও সে ঐ function-এর ভিতরের variable গুলো "মনে রাখতে" পারছে।

//Closure Example 2: Timer Function (setTimeout)
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 3000; //এখানে perGroup বাইরের scope এ থাকলেও, function টি inner scope এর perGroup টাকেই access করছে। কারণ closure এর প্রাধান্য scope chain এর চেয়েও বেশি।
// boardPassengers(180, 3);
/* setTimeout() এর ভিতরের function টা 3 সেকেন্ড পর execute হয়।
ততক্ষণে boardPassengers() function এর execution শেষ।
তাও setTimeout এর ভিতরের callback function n আর perGroup এ access করতে পারছে, কারণ সে closure এর মাধ্যমে সেই variable গুলো মনে রেখেছে।
এইটাই হচ্ছে closure — একটা function তার চারপাশের lexical environment মনে রাখতে পারে, এমনকি সেই environment এর scope মরে গেলেও। */

//---------------------------Coding Challenge--------------------------
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
//or
// document.querySelector('body').addEventListener(
//   'click',
//   (function () {
//     const header = document.querySelector('h1');
//     return function () {
//       header.style.color = 'red';
//     };
//   })()
// );
//or
// const colorChange = function () {
//   const header = document.querySelector('h1');
//   return function () {
//     header.style.color = 'red';
//   };
// };
// const changeOnClick = colorChange();
// document.querySelector('body').addEventListener('click', changeOnClick);

// const a = function () {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('JS CLosure Iteview Questions');
// };
// a();

// using var
// const a = function () {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log('JS CLosure Iteview Questions');
// };
// a();
