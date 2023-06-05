// "use strict";

/*
const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";

delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// alert(isEmpty(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

function sumObjKeys(obj) {
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

// alert(sumObjKeys(salaries));

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  },
};

let calculator = {
  // ... ваш код ...

  read(a, b) {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },

  sum(a, b) {
    return this.a + this.b;
  },

  mul(a, b) {
    return this.a * this.b;
  },
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

ladder.up().up().up().up().up().up().up().down().showStep().down().showStep();
*/

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// let user1 = new User("ann");

// let name = {};

// function A() {
//   return name;
// }
// function B() {
//   return name;
// }

// alert(new A() == new B());

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a", 0);
//     this.b = +prompt("b", 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt("a", 0);
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function foo() {
//   return {
//     name: 2,
//   };
// }

// function foo1() {
//   return
//     {
//     name: 2,
//     }
// }

// let firstobj = {
//   name: "anna",
// };

// firstobj = {
//   name: "nann",
// };

// let secobj = firstobj;

// const first = [1, 2, 3, 4];
// const second = [4, 5, 3, 6];
// const duplicate = [];

// const array = first.concat(second);

// function intersertion(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (first[i] == second[j]) {
//         duplicate.push(array[i]);
//         j++;
//       } else {
//         i++;
//         j++;
//       }
//     }
//   }
// }

// intersertion(duplicate);

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// let obj = {
//   name: 2,
// };

// let obj1 = {
//   name: 3,
// };

// alert(obj - obj1);

// let arr1 = [4, 2, 3, 6, 5, 4, 7, 6, 5, 8];
// let arr2 = [2, 9, 3, 6, 4, 2, 7, 2, 1, 8];

// function findIntersertion() {
//   const intersection = [];

//   for (let i = 0; i < 10; i++) {
//     if (arr2[i] == arr1[i]) {
//       intersection.push(1);
//     } else {
//       intersection.push(0);
//     }
//   }
//   return intersection;
// }

// let result = findIntersertion(arr1, arr2);

// let a = 0;
// let b = 0;
// a = +prompt("A", this.a);
// b = +prompt("B", b);

// console.log(a + b);

// let num = 0;

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while (!isFinite(num));

//   if (num === null || num === "") return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

// readNumber(num);

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert(i);
// }

// let min = 1;
// let max = 5;
// let digit = 0;

// function randomDigit(min, max) {
//   do (digit < min || digit > max) {
//     Math.random() * 10;
//   }
// }

// function random(min, max) {
//   return Math.floor(1 + Math.random() * 4);
// }

// function XO(str) {
//   str = str.toLowerCase().split("");

//   let Count = 0;

//   for (let i = 0; i < str.length - 1; i++) {
//     for (let j = i + 1; j < str.length; i++) {
//       if (str[i] == str[j]) {
//         Count++;
//         i++;
//       } else {
//         i++;
//         j++;
//       }
//     }
//   }
//   return Count % 2 == 0 ? true : false;
// }

// function checkSpam(message) {
//   message = message.toLowerCase();
//   if (message.includes("Viagra") || message.includes("XXX")) {
//     return false;
//   }
//   return true;
// }

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   }
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// str = "Вот, что мне хотелоc...";

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120") === 120);

// str = parseInt("$120");

// console.log(extractCurrencyValue("$120"));

// let styles = ["Jazz", "Bluz"];

// styles.push("Rock");

// styles.shift();

// console.log(styles.length);

// styles[Math.floor((styles.length - 1) / 2)] = "Classic";

// styles.unshift("Rap");

// console.log(styles);

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); // a,b,function(){...}

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let a;
//     a = prompt("A", a);

//     if (a === "" || a === null || !isFinite(a)) break;

//     numbers.push(+a);
//     console.log(numbers);
//   }

//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   }
//   console.log(sum);
// }

// sumInput();

// function getMaxSubSum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         console.log("ys");
//       } else {
//         console.log("no");
//       }
//     }
//   }
// }

// getMaxSubSum([-1, 2, 3, -9]) == 5;
// getMaxSubSum([2, -1, 2, 3, -9]) == 6;
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
// getMaxSubSum([-2, -1, 1, 2]) == 3;
// getMaxSubSum([100, -9, 2, -3, 5]) == 100;
// getMaxSubSum([1, 2, 3]) == 6;

// function camelize(word) {
//   word = word
//     .split("-")
//     .map((str, index) =>
//       index == 0 ? str : str[0].toUpperCase() + str.slice(1)
//     )
//     .join("");

//   console.log(word);
// }

// camelize("background-color") == "backgroundColor";

// let arr = [5, 3, 8, 1];
// let result = [];

// function filterRange(arr, a, b) {
//   for (item of arr) {
//     if (item <= b && item >= a) {
//       result.push(item);
//     }
//   }
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted() {
//   return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)

// let calc = new Calculator();

// function Calculator(str) {
//   this.calculate = function (str) {
//     console.log(str.split(" "));
//   };
// }

// alert(calc.calculate("3 + 7")); // 10

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let set = new Set();

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(values)); // Hare,Krishna,:-O

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort(); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr));

// Tic Tac Toe Checker

// let arr = [];

// function isSolved(board) {
//   for (let i = 0; i < board.length; i++) {
//     board[i].every((xElement) => {
//       return xElement.arr[i] === 2 || xElement.arr[i] === 1;
//     });
//     for (let j = 0; j < board[i].length; j++) {
//       board[i][j].every((yElement) => {
//         return yElement.arr[i][j] === 2 || yElement.arr[i][j] === 1;
//       });
//     }
//   }
//   return board;
// }

// board = [
//   [0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0],
// ];

// function addBinary(a, b) {
//   let binaryArr = [];
//   let sum = a + b;
//   if (sum !== 0 || sum !== 1) {
//     return binaryArr.push(sum % 2);
//   }
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// let sum = 0;

// function sumSalary() {
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// alert(sumSalary(salaries)); // 650

// function count() {
//   return Object.keys(user).length;
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// alert(count(user)); // 2

// let arr = [3, 2, 1, 5, 6, 4, 7, 9]

// boolean = arr

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// function topSalary() {

// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };

// let users = JSON.stringify(user);
// let obj = JSON.parse(users);

// console.log(users);
// console.log(obj);
// let user2 = JSON.parse(JSON.stringify(user));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return ["title"];
//   })
// );

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
// function factorial(n) {
//   let result = 0;
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr = arr.push[i];
//     return arr;
//   }

//   return arr;
// }

// arr.push[1];

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// function sumTo(n) {
//   return n != 1 ? n + sumTo(n - 1) : 1;
// }

// function sum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumToo(n) {
//   return (n + 1) / 2;
// }

// alert(sumToo(100));
// alert(sumTo(100));
// alert(sum(100)); // 5050

// function fib(n) {
//   return n != 1 ? n + fib(n - 1) : 1;
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// printList(list) {
//   console.log(list != null ? printlist(list.next))
// }

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }

//   alert(list.value);
// }

// printReverseList(list);

// let name = "John";
// name = "Pete"; // (*)

// function sayHi(name) {
//   console.log("Hi, " + name);
// }

// sayHi(name); // Pete

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// g();

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // ?
// alert(counter2()); // ?

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };

//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();
// let counter2 = new Counter();

// alert(counter.up()); // 1
// alert(counter.up()); // 2

// alert(counter2.up()); // 1
// alert(counter2.up()); // 2

// (function sum() {
//   let a;
//   let b;
//   return a + b
// })

// sum(1)(2) = 3
// sum(5)(-1) = 4

// function inBetween(a, b) {
//   return function () {
//     return arr.filter(() => arr.length > a && arr.length < b);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function byField(name) {
//   return func
// }

// users.sort(byField('name'));

// function makeArmy() {
//   let shooters = [];

//   while (let i < 10) {
//     let shooter = function () {
//       // функция shooter
//       alert(i); // должна выводить порядковый номер
//       shooters.push(shooter);
//     i++;
//     };

//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   function counterDecrease() {
//     return count--;
//   }

//   return counter;
// }

// let counterMinus = makeCounter();
// let counter = makeCounter();

// counter.count = 10;
// alert(counter()); // 10

// function sum(a) {
//   return function (...b) {
//     return a.join(...b);
//   };
// }

// sum(1)(2) == 3; // 1 + 2

// console.log(sum(1)(2)(3));

// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// }, 100);

// console.log(Math.floor(8 / 3) + 1);

// function queueTime(customers, n) {
//   let time = 0;

//   if (customers.length < n) {
//     for (let i = 0; i <= customers.length; i++) {
//       return (time += i);
//     }
//     // } else if (customers.length == n){
//     //   var arr = new Array(n).fill(0);
//   }
// }

// var arr = new Array(n).fill(0);

// let customers = [5, 3, 4];
// let n = 7;

// function printNumbers(from, to) {
//   let curent = from;

//   let timerId = setInterval(function () {
//     alert(curent);

//     if (curent == to) {
//       clearInterval(timerId);
//     }

//     curent++;
//   }, 1000);
// }

// printNumbers(5, 10);

// function queueTime(customers, n) {
//   var arr = new Array(n).fill(0);
//   for (var i = 0; i < customers.length; i++) {
//     var idx = arr.indexOf(Math.min(arr));
//     arr[idx] += customers[i];
//   }

//   return Math.max(arr);
// }

// let arr1 = new Array(7).fill(0);

// console.log(arr1);
// console.log(queueTime([3, 3, 1, 5, 7, 3], 3));

// function firstNonConsecutive(arr) {
//   let countArr = [arr[0]];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == countArr) {
//       countArr.push(arr[i]);
//     } else if (arr[i] !== countArr) {
//       return null;
//     }
//   }
//   return arr
// }

// arr = [3, 4, 5, 6];
// let countArr = [arr[0]];
// console.log(countArr);
// console.log(firstNonConsecutive(arr));

// function firstNonConsecutive(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == countArr[0]) {
//       countArr++;
//     } else {
//       return countArr;
//     }
//   }
// }

// arr = [3, 7, 5, 6, 7];
// let countArr = arr[[1]];

// console.log(firstNonConsecutive(arr));
// console.log(countArr);

// function compareSets(set1, set2) {
//   // преобразуем множества в массивы
//   let arr1 = Array.from(set1);
//   let arr2 = Array.from(set2);

//   // сортируем массивы
//   arr1.sort();
//   arr2.sort();

//   let counter = 0;

//   // сравниваем элементы массивов
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       counter++;
//     }
//   }

//   // если количество совпадающих элементов равно длине массива, то множества равны
//   if (counter === arr1.length) {
//     return 1; // вернуть 1 в двоичной форме
//   } else {
//     return 0; // вернуть 0 в двоичной форме
//   }
// }

// // пример использования функции
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([3, 2, 1]);
// console.log(compareSets(set1, set2)); // выведет 1

// function persistence(num) {
//   if (num < 10) {
//     return num;
//   } else {
//     return persistence(
//       String(num / 10)
//         .split(".")
//         .reduce(function (mult, current) {
//           return mult * current;
//         })
//     );
//   }
// }

// let count = -1;

// function persistence(num) {
//   count++;
//   let newNum = 0;
//   if (num < 10) {
//     return num;
//   }

//   newNum = String(num)
//     .split("")
//     .map(Number)
//     .reduce((value, current) => value * current);

//   console.log(newNum);

//   persistence(newNum);
// }

// persistence(39);

// console.log("tat" + " " + count);

// function countPositivesSumNegatives(input) {
//   let arr = [];
//   let countPositive = 0;
//   let sumNegative = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] >= 0) {
//       countPositive++;
//     } else if (input[i] < 0) {
//       sumNegative -= input[i];
//     }
//   }

//   arr.push(countPositive, -sumNegative);
//   return arr;
// }

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// );

// function removeEveryOther(arr) {
//   for (let i = 0; i < arr.lengtth; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i].splice(1, 2);
//     }
//   }
//   return arr;
// }

// console.log((arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// var lengthOfLastWord = function (s) {
//   return s
//     .split(" ")
//     .filter((word) => word.length > 0)
//     .pop().length;
//   // return arr[arr.length - 1].length;
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// class LinkedList {
//   constructor() {
//     this.size = 0
//     this.root = null
//   }
// }

// add(value) {

// }

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendClock extends Clock {
//   constructor({ template }) {
//     super({ template });
//     this.precision = 1000;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// arr1 = [3, 3, 4, , 2, 1];
// arr2 = [4, 4, 6, 3, 7, 9];

// let arr = arr1.concat(arr2);

// console.log(arr.sort((a, b) => a - b));

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const node = { data, next: null };

//     if (this.tail) {
//       this.tail.next = node;
//     }

//     if (!this.tail) {
//       this.tail = node;
//     }

//     this.tail = node;
//   }
// }

// const list = new LinkedList();
// list.append(3);

// list

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// result = [];

// function twoPoint() {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] !== nums[j]) {
//         result.push(nums[i]);
//         i++;
//       }
//     }
//   }
//   return result;
// }

// console.log(twoPoint(nums));

// console.log(Array.from(new Set(nums)));

// digits[digits.length - 1] = digits[digits.length - 1] + 1;

// var plusOne = function (arr) {
//   // for (let i = 0; i < digits.length; i++) {
//   //   digits.length;
//   //   if (digits[i] === 10) {
//   //     digits[i] = 0;
//   //     let j = i - 1;
//   //     while (digits[j] === 10) {
//   //       j--;
//   //     }
//   //     if (j >= 0) {
//   //       digits[j] += 1;
//   //     }
//   //     digits[i] = 0;
//   //   }
//   // }
//   // return digits;

//   arr.forEach((element, index) => {
//     if (element === 10 && index > 0) {

//       for (let i = index - 1; i >= 0 && arr[i] === 10; i--) {
//         arr[i] = 0;
//         if (i > 0) arr[i - 1] += 1;
//       }

//       arr[index] = 0;
//     }
//   });
// };

// digits;

// const arr = [1, 2, 3, 4, 5, 10, 6, 7, 10, 9, 10];

// arr.forEach((element, index) => {
//   if (element === 10 && index > 0) {
//     console.log(
//       `Найдено число 10 в массиве на позиции ${index}, увеличиваем предыдущие элементы на 1 и заменяем текущий элемент на 0!`
//     );

//     for (let i = index - 1; i >= 0 && arr[i] === 10; i--) {
//       arr[i] = 0;
//       if (i > 0) arr[i - 1] += 1;
//     }

//     arr[index] = 0;
//   }
// });

// console.log("Измененный массив:", arr);

// let digits = [1, 9, 9, 3, 9, 10];

// var plusOne = function (digits) {
//   digits.forEach((element, index) => {
//     if (element === 10 && index > 0) {
//       for (let i = index - 1; i >= 0 && digits[i] === 10; i--) {
//         digits[i] = 0;
//         if (i > 0) digits[i - 1] += 1;
//       }
//       digits[index] = 0;
//     }
//   });
//   return digits;
// };

// console.log(plusOne(digits));

// function increasePreviousIf10(arr) {
//   arr.forEach((element, index) => {
//     if (element === 10 && index > 0) {
//       console.log(
//         `Найдено число 10 в массиве на позиции ${index}, увеличиваем предыдущие элементы на 1 и заменяем текущий элемент на 0!`
//       );

//       for (let i = index - 1; i >= 0 && arr[i] === 10; i--) {
//         arr[i] = 0;
//         if (i > 0) arr[i - 1] += 1;
//       }

//       arr[index] = 0;
//     }
//   });

//   return arr;
// }

// const myArray = [1, 2, 3, 4, 5, 10, 6, 7, 10, 9, 10];
// console.log("Изначальный массив:", myArray);

// const modifiedArray = increasePreviousIf10(myArray);
// console.log("Измененный массив:", modifiedArray);

// function plusOne(digits) {
//   let sum = BigInt(digits.join("")) + 1n;
//   console.log(sum.toString().split(""));
// }

// digits = [1, 9, 9];

// plusOne(digits);

// digits;

// console.log(0.1 + 2.8);

// let result = [];

// var addBinary = function (a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] + b[j] == 0) {
//         result.push("1");
//       } else if (a[i] + b[j] == 1) {
//         result.push("1");
//       } else {
//         result.push("0");
//       }
//     }
//   }
//   return result;
// };

// console.log(addBinary([0, 1, 0, 1, 1], [1, 0, 1, 1, 0]));

// let a = parseInt("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", 2);
// let b = parseInt("1", 2);

// console.log(a + b);

// num = a + b

// console.log(num.toString(2));

// let s = "()[]{}";

// let q = s.split("");

// function check() {
//   return q.length % 2 == 0 ? true : false;
// }
// console.log(check());
// console.log(q.length % 2 == 0);

// salary = [
//   25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
//   40000,
// ];
// let min = 0;
// ave;

// function average(salary) {
//   return salary.sort((a, b) => a - b)
// let sum = sliceArr.reduce((ind, a) => ind + a);
// return sum / sliceArr.length;
// salary.sort().shift();
// salary.pop();
// let sum = salary.reduce((ind, a) => ind + a);
// ave = sum / salary.length;
// return ave
// }

// salary.sort();

// console.log(average(salary));

// let flowerbed = [1, 0, 0, 0, 1, 0, 1];
// let n = 1;

// function canPlaceFlowers(flowerbed, n) {
//   for (let i = 0; i < flowerbed.length - 2; i++) {
//     for (let j = i + 1; j < flowerbed.length - 1; j++) {
//       for (let k = j + 1; k < flowerbed.length; k++) {
//         if (flowerbed[i] == flowerbed[j] && flowerbed[j] == flowerbed[k]) {
//           flowerbed[j] = 1;
//           n--;
//         }
//       }
//     }
//   }
//   console.log(flowerbed);
//   return n == 0 ? true : false;
// }

// console.log(canPlaceFlowers(flowerbed, n));

// arr = [1, 0, 2, 3, 0, 4, 5, 0];

// var duplicateZeros = function(arr) {
//   let stack = []
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == 0) {
//           stack.push(arr[i], arr[i])
//       } else {
//       stack.push(arr[i])
//       }
//   }
//   return stack.slice(0,8)
// };

// console.log(duplicateZeros(arr));
// [1,0,0,2,3,0,0,4]

// let n = 5;

// var bitwiseComplement = function (n) {
//   // let base10 = n.toString(2);

//   return parseInt(
//     n.toString(2).replace(/0|1/g, function (match) {
//       return match === "0" ? "1" : "0";
//     }),
//     2
//   );

// base10 = base10.replace(/0|1/g, function (match) {
//   return match === "0" ? "1" : "0";
// });

// let arr = [];
// for (let i = 0; i < base10.length; i++) {
//   if (base10[i] == 0) {
//     arr.push(1);
//   } else {
//     arr.push(0);
//   }
// }
// console.log(arr);
// return parseInt(arr.join(""), 10)
// return parseInt("0102332132");
// };

// console.log(bitwiseComplement(10));
// let nums = [-1]

// var arraySign = function (nums) {
//   mul = 1;
//   for (let i = 0; i < nums.length; i++) {
//     mul *= nums[i];
//     console.log(nums[i]);
//   }
//   return parseInt(mul.toString().split(" ")[0]) :;
// };

// console.log(arraySign(nums));

// let number = -1234;
// let firstDigit = parseInt(number.toString().substring(1, 2));

// console.log(-firstDigit); // выведет

// operations = ["5", "-2", "4", "C", "D", "9", "+", "+"];

// var calPoints = function (operations) {
//   record = [];

//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] == "C") {
//       record.pop();
//       continue;
//     } else if (operations[i] == "D") {
//       record.push(record[record.length - 1] * 2);
//       continue;
//     } else if (operations[i] == "+") {
//       record.push(record[record.length - 1] + record[record.length - 2]);
//       continue;
//     } else {
//       record.push(+operations[i]);
//     }
//   }
//   return record.reduce((a, b) => a + b, 0);
// };

// console.log(calPoints(operations));

// stack = []

// function non(a, b) {
//   for (let i = a; i <= b; i++) {
//     stack.push(a)
//     a++;
//   }
//   return stack
// }

// console.log(non(-2, 4))

// console.log(stack.reduce((A, B) => A + B))

// var arrangeCoins = function (n) {
//   let count = 0;
//   for (let i = 1; n > 0; i++) {
//     n -= i;
//     count++;
//   }
//   return count - 1;
// };

// console.log(arrangeCoins(5));

// var findDifference = function (nums1, nums2) {
//   let result1 = nums1.filter((word) => word.length > 0);
//   console.log(result1);
//   return result1;
// };

// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));

// const senate = ["RDDRDR"];

// function calc() {
//   let radiant = [];
//   let dire = [];

//   const n = senate.length;

//   for (i = 0; i < n; i++) {
//     if (senate[i] === "R") {
//       radiant.push(i + n);
//     } else {
//       dire.push(i + n);
//     }
//   }

//   while (radiant.length > 0 && dire.length > 0) {
//     if (radiant[0] < dire[0]) {
//       radiant.push(radiant[0] + n);
//     } else {
//       dire.push(dire[0] + n);
//     }
//     radiant.shift();
//     dire.shift();
//   }
//   return radiant.length > 0 ? "Radiant" : "Dire";
// }

// console.log(calc(senate));

// var maxVowels = function (s, k) {
//   let maxCount = 0;
//   const vowels = /[aeiou]/g;
//   // let found = s.match(vowels);

//   for (let i = 0; i < s.length; i++) {
//     if (s.slice(0, 2).math(vowels) && s.slice(0, 2).math(vowels).length > maxCount) {
//         maxCount =
//     }
//     continue
//   }

//   return found.length;
// };

// console.log(maxVowels("abciiidef", 3))
// s = "aeweqsdwq";

// const vowels = /[aeiou]/g;
// console.log(s.match(vowels));
// let count;
// console.log(count = s.match(vowels).length)

// var defangIPaddr = function (address) {
//   let add = address.split(".");
//   let arr = [];
//   for (let elem of add) {
//     !elem != add.length - 1 ? arr.push(add[i] + "[.]") : arr.push(add[i]);
//   }
//   return arr.join("");
// };

// console.log(defangIPaddr("255.100.50.0"));

// var numSubseq = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let n = nums.length;
//   let left = 0;
//   const MOD = 1000000007;
//   right = n - 1;
//   let count = 0;
//   const pow = new Array(nums.length).fill(1);
//   let mod = 1000000007;

//   for (let i = 0; i < nums.length; i++) {
//     pow[i] = (pow[i - 1] * 2) % MOD;
//     for (let j = i; j < nums.length - 1; j++) {}
//   }
//   return pow
// };

// console.log(numSubseq([3, 4, 5, 5, 7, 8, 9], 10))

// nums = [3, 4, 5, 5, 7, 8, 9]
// target = 10

// const MOD = 1000000007;

// nums = nums.sort((a, b) => a - b);

// const pows = [1];

//     for (let i = 1; i < nums.length; i++) {
//         pows.push(pows[i - 1] * 2 % MOD);
//     }
//     console.log(pows)

// let nums1 = [1, 2, 3],
//   nums2 = [2, 4, 6];

// var findDifference = function (nums1, nums2) {
//   return [
//     nums1.filter(
//       (item, pos) => nums1.indexOf(item) == pos && !nums2.includes(item)
//     ),
//     nums2.filter(
//       (item, pos) => nums2.indexOf(item) == pos && !nums1.includes(item)
//     ),
//   ];
// };

// console.log(findDifference(nums1, nums2));

// function* gen() {
//   // Передаём вопрос во внешний код и ожидаем ответа
//   let result = yield "2 + 3 = ?"; // (*)

//   console.log(result);
// }

// let generator = gen();

// let question = generator.next().value; // <-- yield возвращает значение

// generator.next(4); // --> передаём результат в генератор

// function* gen() {
//   try {
//     let result = yield "2 + 2 = ?"; // (1)

//     alert(
//       "Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение"
//     );
//   } catch (e) {
//     console.log(e); // покажет ошибку
//   }
// }

// let generator = gen();

// let question = generator.next().value;

// generator.throw(new Error("Ответ не найден в моей базе данных")); // (2)

// var merge = function (nums1, m, nums2, n) {
//   nums1 = nums1.slice(0, m);
//   return nums1.concat(nums2).sort((a, b) => a - b);
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// var sortSentence = function (s) {
//   s = s.split(" ");

//   s = s.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

//   return s.join(" ").replace(/[0-9]/g, "");
// };

// console.log(sortSentence("This2 sentence4 This1 a3"));

// var sumBase = function (n, k) {
//   return n
//     .toString(k)
//     .split("")
//     .map(Number)
//     .reduce((a, b) => a + b);
// };

// console.log(sumBase(34, 6));

// var reverseBits = function (n) {
//   return String(n).split("").reverse().join("")
// };

// console.log(reverseBits(00000010100101000001111010011100));
// var sortArrayByParityII = function (nums) {
//   let stack = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//       stack.push(nums[i]);
//     } else {
//       stack.push(nums[i]);
//     }
//   }
//   return stack;
// };

// console.log(sortArrayByParityII([4, 2, 5, 7]));

// var numUniqueEmails = function (emails) {
//   // emails = emails.join(" ").replace(".", "").split(" ");

//   emails = emails.join(" ").split("");

//   for (let i = 0; i < emails.length; i++) {
//     if (emails[i] == ".") {
//       emails[i].replace(".", "");
//     } else if (emails[i] == "+") {
//       emails[i].split("?")[0];
//     }
//     return emails.join("");
//   }

//  ;

//   // let set = new Set(emails);

//   return emails;
// };

// console.log(
//   numUniqueEmails([
//     "test.email+alex@leetcode.com",
//     "test.e.mail+bob.cathy@leetcode.com",
//     // "testemail+david@lee.tcode.com",
//   ])
// );

// var diagonalSum = function (mat) {
//   let result = 0;
//   let left = 0,
//     right = mat.length - 1;
//   for (let i = 0; i < mat.length; i++) {
//     if (left == right) {
//       result += mat[i][left]; // or mat[i][right]
//     } else {
//       result += mat[i][left];
//       result += mat[i][right];
//     }
//     left++;
//     right--;
//   }
//   return result;
// };

// console.log(
//   diagonalSum([
//     [1, 1, 1],
//     [4, 1, 1],
//     [7, 8, 9],
//   ])
// );

// document.body.style.background = "red";

// setTimeout(() => (document.body.style.background = ""), 3000); // вернуть назад

// var firstPalindrome = function (words) {
//   return words
// };

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));

// var spiralOrder = function (matrix) {
//   let top = 0;
//   let left = 0;
//   let bottom = matrix.length - 1;
//   let right = matrix[0].length - 1;
//   const result = [];
//   const size = matrix.length * matrix[0].length;

//   while (result.length < size) {
//     for (let i = left; i <= right && result.length < size; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom && result.length < size; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--;

//     for (let i = right; i >= left && result.length < size; i--) {
//       result.push(matrix[bottom][i]);
//     }
//     bottom--;

//     for (let i = bottom; i >= top && result.length < size; i--) {
//       result.push(matrix[i][left]);
//     }
//     left++;
//   }
//   return result;
// };

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// var generateMatrix = function (n) {
//   let output = new Array(n).fill(0).map(() => new Array(n).fill(0));
//   let count = 0;
//   let left = 0;
//   let right = n - 1;
//   let bottom = n - 1;
//   let top = 0;
//   let size = n * n;

//   while (count < size) {
//     for (let i = left; i <= right; i++) {
//       count++;
//       output[top][i] = count;
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//       count++;
//       output[i][right] = count;
//     }
//     right--;

//     for (let i = right; i >= left; i++) {
//       count++;
//       output[bottom][i] = count;
//     }
//     bottom--;

//     for (let i = bottom; i >= top; i++) {
//       count++;
//       output[i][left] = count;
//     }
//     left++;
//   }
//   return output;
// };

// console.log(generateMatrix(3));

// var countGoodStrings = function (low, high, zero, one) {
//   const modulo = 1e9 + 7;
//   let answ = 0;
//   const dp = Array(high + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 1; i <= high; i++) {
//     if (i - zero >= 0) {
//       dp[i] = (dp[i] + dp[i - zero]) % modulo;
//     }
//     if (i - one >= 0) {
//       dp[i] = (dp[i] + dp[i - one]) % modulo;
//     }

//
//     if (i >= low) {
//       answ = (answ + dp[i]) % modulo;
//     }
//   }

//   return answ;
// };

// var maxScore = function (nums) {
//   const cache = new Map();
//   function gcd(a, b) {
//     if (!b) return a;
//     return gcd(b, a % b);
//   }
//   function helper(arr, num, op) {
//     if (!arr.length) return 0;
//     const key = arr.join() + num;
//     if (cache.has(key)) return cache.get(key);
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//       const nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
//       if (num) {
//         const currGCD = gcd(num, arr[i]);
//         const rest = helper(nextArr, null, op + 1);
//         max = Math.max(max, op * currGCD + rest);
//       } else {
//         const rest = helper(nextArr, arr[i], op);
//         max = Math.max(max, rest);
//       }
//     }
//     cache.set(key, max);
//     return max;
//   }
//   return helper(nums, null, 1);
// };

// class Graph {
//   constructor() {
//     this.vertices = {};
//   }

//   addVertex(vertex) {
//     this.vertices[vertex] = {};
//   }

//   addEdge(vertex1, vertex2, weight) {
//     this.vertices[vertex1][vertex2] = weight;
//     this.vertices[vertex2][vertex1] = weight;
//   }

//   dijkstra(startVertex, endVertex) {
//     const distances = {};
//     const visited = {};
//     const previous = {};
//     const queue = new PriorityQueue();

//     for (let vertex in this.vertices) {
//       if (vertex === startVertex) {
//         distances[vertex] = 0;
//         queue.enqueue(vertex, 0);
//       } else {
//         distances[vertex] = Infinity;
//         queue.enqueue(vertex, Infinity);
//       }
//       previous[vertex] = null;
//     }

//     while (!queue.isEmpty()) {
//       const currentVertex = queue.dequeue().element;
//       if (currentVertex === endVertex) {
//         // Построение пути и вычисление суммы
//         const path = [];
//         let vertex = endVertex;
//         let totalWeight = 0; // Переменная для хранения суммы весов
//         while (vertex !== null) {
//           path.unshift(vertex);
//           const previousVertex = previous[vertex];
//           if (previousVertex !== null) {
//             totalWeight += this.vertices[vertex][previousVertex];
//           }
//           vertex = previousVertex;
//         }
//         return { path, totalWeight };
//       }

//       if (!visited[currentVertex]) {
//         visited[currentVertex] = true;
//         const neighbors = this.vertices[currentVertex];
//         for (let neighbor in neighbors) {
//           const distance = distances[currentVertex] + neighbors[neighbor];
//           if (distance < distances[neighbor]) {
//             distances[neighbor] = distance;
//             previous[neighbor] = currentVertex;
//             queue.enqueue(neighbor, distance);
//           }
//         }
//       }
//     }

//     // Если путь не найден
//     return null;
//   }

//   findMinCut(sourceVertex, sinkVertex) {
//     // Создаем копию графа
//     const residualGraph = JSON.parse(JSON.stringify(this.vertices));

//     let maxFlow = 0; // Максимальный поток
//     const parent = {}; // Хранит путь в виде дерева
//     let hasAugmentingPath = true;

//     while (hasAugmentingPath) {
//       // Ищем путь в остаточном графе с помощью алгоритма поиска в ширину
//       hasAugmentingPath = false;
//       const queue = [sourceVertex];
//       parent[sourceVertex] = null;

//       while (queue.length > 0) {
//         const currentVertex = queue.shift();

//         for (let neighbor in residualGraph[currentVertex]) {
//           if (!parent[neighbor] && residualGraph[currentVertex][neighbor] > 0) {
//             parent[neighbor] = currentVertex;
//             queue.push(neighbor);
//           }
//         }
//       }

//   //     // Если найден путь до стока
//       if (parent[sinkVertex]) {
//         hasAugmentingPath = true;

//         let pathFlow = Infinity;
//         let v = sinkVertex;

//         // Находим минимальную пропускную способность на пути
//         while (v !== sourceVertex) {
//           const u = parent[v];
//           pathFlow = Math.min(pathFlow, residualGraph[u][v]);
//           v = u;
//         }

//         // Обновляем остаточные пропускные способности графа
//         v = sinkVertex;
//         while (v !== sourceVertex) {
//           const u = parent[v];
//           residualGraph[u][v] -= pathFlow;
//           residualGraph[v][u] += pathFlow;
//           v = u;
//         }

//         maxFlow += pathFlow;
//       }
//     }

//     // После выполнения алгоритма Форда-Фалкерсона остаточные ребра графа образуют минимальный разрез
//     const minCut = [];

//     // Помечаем вершины, достижимые из источника
//     const visited = {};
//     const queue = [sourceVertex];
//     visited[sourceVertex] = true;

//     while (queue.length > 0) {
//       const currentVertex = queue.shift();

//       for (let neighbor in residualGraph[currentVertex]) {
//         if (!visited[neighbor] && residualGraph[currentVertex][neighbor] > 0) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       }
//     }

//     // Все ребра, исходящие из посещенных вершин, являются частью минимального разреза
//     for (let vertex in this.vertices) {
//       for (let neighbor in this.vertices[vertex]) {
//         if (visited[vertex] && !visited[neighbor]) {
//           minCut.push({ vertex1: vertex, vertex2: neighbor });
//         }
//       }
//     }

//     return { minCut, maxFlow };
//   }
// }

// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element, priority) {
//     const queueElement = { element, priority };
//     let added = false;
//     for (let i = 0; i < this.items.length; i++) {
//       if (queueElement.priority < this.items[i].priority) {
//         this.items.splice(i, 0, queueElement);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.items.push(queueElement);
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// Graph.prototype.primMST = function () {
//   const visited = {};
//   const MST = [];

//   // Выбираем произвольную начальную вершину
//   const startVertex = Object.keys(this.vertices)[0];
//   visited[startVertex] = true;

//   while (Object.keys(visited).length < Object.keys(this.vertices).length) {
//     let minEdge = null;

//     // Поиск ребра с минимальным весом, которое связывает посещенную и непосещенную вершину
//     for (let visitedVertex in visited) {
//       const neighbors = this.vertices[visitedVertex];
//       for (let neighbor in neighbors) {
//         if (!visited[neighbor]) {
//           if (minEdge === null || neighbors[neighbor] < minEdge.weight) {
//             minEdge = {
//               vertex1: visitedVertex,
//               vertex2: neighbor,
//               weight: neighbors[neighbor],
//             };
//           }
//         }
//       }
//     }

//     if (minEdge !== null) {
//       visited[minEdge.vertex2] = true;
//       MST.push(minEdge);
//     }
//   }

//   return MST;
// };

// const graph = new Graph();

// graph.addVertex("0");
// graph.addVertex("1");
// graph.addVertex("2");
// graph.addVertex("3");
// graph.addVertex("4");
// graph.addVertex("5");
// graph.addVertex("6");
// graph.addVertex("7");
// graph.addVertex("8");
// graph.addVertex("9");
// graph.addVertex("10");
// graph.addVertex("11");
// graph.addVertex("12");
// graph.addVertex("13");

// graph.addEdge("0", "1", 12);
// graph.addEdge("0", "2", 12);
// graph.addEdge("1", "3", 5);
// graph.addEdge("0", "3", 16);
// graph.addEdge("2", "3", 8);
// graph.addEdge("1", "4", 15);
// graph.addEdge("3", "4", 2);
// graph.addEdge("3", "5", 14);
// graph.addEdge("2", "5", 14);
// graph.addEdge("4", "6", 16);
// graph.addEdge("3", "6", 18);
// graph.addEdge("5", "6", 17);
// graph.addEdge("4", "7", 10);
// graph.addEdge("6", "7", 10);
// graph.addEdge("6", "8", 8);
// graph.addEdge("9", "8", 3);
// graph.addEdge("5", "9", 10);
// graph.addEdge("7", "10", 22);
// graph.addEdge("8", "10", 19);
// graph.addEdge("9", "10", 5);
// graph.addEdge("7", "11", 12);
// graph.addEdge("10", "11", 9);
// graph.addEdge("10", "12", 6);
// graph.addEdge("9", "12", 15);
// graph.addEdge("11", "13", 16);
// graph.addEdge("10", "13", 12);
// graph.addEdge("12", "13", 19);

// const shortestPath = graph.dijkstra("0", "12");
// const MST = graph.primMST();

// console.log("Shortest Path:", shortestPath.path);
// console.log("Total Weight:", shortestPath.totalWeight);
// console.log("Minimum Spanning Tree:", MST);

/////////////////////////////////////////////////////////////

// const graph = {
//   A: ["B", "C", "D"],
//   B: ["A", "C"],
//   C: ["A", "B", "D"],
//   D: ["A", "C"],
// };

// function isGraphPlanar(graph) {
//   const vertices = Object.keys(graph);

//   // Шаги 2 и 3: проверка числа вершин и степеней вершин
//   if (vertices.length <= 4) {
//     return true;
//   }

//   const degrees = {};
//   for (const vertex of vertices) {
//     degrees[vertex] = graph[vertex].length;
//     if (degrees[vertex] >= 3) {
//       return false;
//     }
//   }

//   // Шаг 4: алгоритм вложения
//   const embeddedGraph = {};
//   for (const vertex of vertices) {
//     embeddedGraph[vertex] = [];
//   }

//   const embeddedEdges = [];
//   const newVertex = "X";

//   for (const vertex of vertices) {
//     const neighbors = graph[vertex];

//     for (const neighbor of neighbors) {
//       const edge = [vertex, neighbor].sort().join("");

//       if (!embeddedEdges.includes(edge)) {
//         embeddedEdges.push(edge);
//         embeddedGraph[vertex].push(neighbor);
//         embeddedGraph[neighbor].push(vertex);
//       }
//     }
//   }

//   const edgeIntersections = {}; // Хранит информацию о пересечениях ребер

//   for (const vertex of vertices) {
//     const neighbors = embeddedGraph[vertex];

//     for (let i = 0; i < neighbors.length; i++) {
//       const neighbor1 = neighbors[i];

//       for (let j = i + 1; j < neighbors.length; j++) {
//         const neighbor2 = neighbors[j];

//         const edge1 = [vertex, neighbor1].sort().join("");
//         const edge2 = [vertex, neighbor2].sort().join("");

//         // Проверяем пересечение ребер
//         if (edgeIntersects(edge1, edge2)) {
//           return false;
//         }

//         // Обновляем информацию о пересечении ребер
//         if (!edgeIntersections[edge1]) {
//           edgeIntersections[edge1] = [];
//         }
//         if (!edgeIntersections[edge2]) {
//           edgeIntersections[edge2] = [];
//         }
//         edgeIntersections[edge1].push(edge2);
//         edgeIntersections[edge2].push(edge1);
//       }
//     }
//   }

//   return true;
// }

// // Вспомогательная функция для проверки пересечения ребер
// function doEdgesIntersect(edge1, edge2) {
//   const [x1, y1] = edge1[0];
//   const [x2, y2] = edge1[1];
//   const [x3, y3] = edge2[0];
//   const [x4, y4] = edge2[1];

//   const d1 = direction(x3, y3, x4, y4, x1, y1);
//   const d2 = direction(x3, y3, x4, y4, x2, y2);
//   const d3 = direction(x1, y1, x2, y2, x3, y3);
//   const d4 = direction(x1, y1, x2, y2, x4, y4);

//   if (
//     ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
//     ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
//   ) {
//     return true;
//   } else if (d1 === 0 && onSegment(x3, y3, x4, y4, x1, y1)) {
//     return true;
//   } else if (d2 === 0 && onSegment(x3, y3, x4, y4, x2, y2)) {
//     return true;
//   } else if (d3 === 0 && onSegment(x1, y1, x2, y2, x3, y3)) {
//     return true;
//   } else if (d4 === 0 && onSegment(x1, y1, x2, y2, x4, y4)) {
//     return true;
//   }

//   return false;
// }

// // Вспомогательные функции для проверки пересечения ребер

// function direction(x1, y1, x2, y2, x3, y3) {
//   return (x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1);
// }

// function onSegment(x1, y1, x2, y2, x3, y3) {
//   return (
//     Math.min(x1, x2) <= x3 &&
//     x3 <= Math.max(x1, x2) &&
//     Math.min(y1, y2) <= y3 &&
//     y3 <= Math.max(y1, y2)
//   );
// }

// console.log(isGraphPlanar());

// var swapPairs = function(head) {
//   if (head == null || head.next == null) {
//       return head;
//   }
//   let ans = new ListNode(0);
//   ans.next = head;
//   let curr = ans;
//   while (curr.next != null && curr.next.next != null) {
//       let t1 = curr.next;
//       let t2 = curr.next.next;
//       curr.next = t2;
//       t1.next = t2.next;
//       t2.next = t1;
//       curr = curr.next.next;
//   }
//   return ans.next;
// };

// function pairSum(head) {
//   let slow = head;
//   let fast = head;

//   // Get middle of the linked list.
//   while (fast != null && fast.next != null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   // Reverse second half of the linked list.
//   let nextNode,
//     prev = null;
//   while (slow != null) {
//     nextNode = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = nextNode;
//   }

//   let start = head;
//   let maximumSum = 0;
//   while (prev != null) {
//     maximumSum = Math.max(maximumSum, start.val + prev.val);
//     prev = prev.next;
//     start = start.next;
//   }

//   return maximumSum;
// }

// let solve = (src, graph, vis) => {
//   let q = new Queue();
//   q.enqueue(src);
//   vis[src] = 0;

//   while (!q.isEmpty()) {
//     let node = q.front();
//     q.pop();

//     for (let i = 0; i < graph[node].length; i++) {
//       let en = graph[node][i];

//       if (vis[en] != -1 && vis[en] == vis[node]) return false;
//       else if (vis[en] == -1) {
//         // vis[en] = !vis[node];
//         vis[en] = vis[node] == 0 ? 1 : 0;
//         q.push(en);
//       }
//     }
//   }

//   return true;
// };

// var isBipartite = function (graph) {
//   let n = graph.length;
//   let vis = new Array(n);
//   vis.fill(-1);

//   for (let i = 0; i < n; i++) {
//     if (vis[i] == -1) {
//       let rs = solve(i, graph, vis);
//       if (rs == false) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// var calcEquation = function (equations, values, queries) {
//   // Step 1: Build the graph
//   const graph = buildGraph(equations, values);

//   // Step 2: Evaluate queries
//   const results = [];
//   for (const [start, end] of queries) {
//     if (!(start in graph) || !(end in graph)) {
//       // One or both variables are not in the graph
//       results.push(-1.0);
//     } else {
//       const visited = new Set();
//       const result = evaluateQuery(graph, start, end, visited);
//       results.push(result);
//     }
//   }

//   return results;
// };

// /**
//  * Helper function to build the graph from equations and values.
//  * @param {string[][]} equations - Array of variable pairs equations.
//  * @param {number[]} values - Array of real numbers representing the equation values.
//  * @return {object} - The built graph.
//  */
// function buildGraph(equations, values) {
//   const graph = {};

//   for (let i = 0; i < equations.length; i++) {
//     const [numerator, denominator] = equations[i];
//     const value = values[i];

//     if (!(numerator in graph)) {
//       graph[numerator] = [];
//     }
//     if (!(denominator in graph)) {
//       graph[denominator] = [];
//     }

//     graph[numerator].push([denominator, value]);
//     graph[denominator].push([numerator, 1 / value]);
//   }

//   return graph;
// }

// /**
//  * Helper function to evaluate a query using DFS.
//  * @param {object} graph - The graph representing the equations and values.
//  * @param {string} start - The starting variable.
//  * @param {string} end - The target variable.
//  * @param {Set} visited - Set to track visited variables during DFS.
//  * @return {number} - The result of evaluating the query.
//  */
// function evaluateQuery(graph, start, end, visited) {
//   if (start === end) {
//     return 1.0;
//   }

//   visited.add(start);

//   for (const [next, value] of graph[start]) {
//     if (visited.has(next)) {
//       continue;
//     }

//     visited.add(next);
//     const result = evaluateQuery(graph, next, end, visited);

//     if (result !== -1.0) {
//       return result * value;
//     }
//   }

//   return -1.0;
// }

// var shortestBridge = function (grid) {
//   const N = grid.length;
//   let visit = new Set();
//   let deque = [];
//   const direction = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   function invalid(row, col) {
//     return row < 0 || col < 0 || row === N || col === N;
//   }
//   function dfs(row, col) {
//     if (
//       invalid(row, col) ||
//       visit.has(`${row},${col}`) ||
//       grid[row][col] == 0
//     ) {
//       return;
//     }
//     visit.add(`${row},${col}`);
//     deque.push([row, col]);
//     for (let dx of direction) {
//       dfs(row + dx[0], col + dx[1]);
//     }
//   }
//   function bfs() {
//     let res = 0;
//     while (deque.length != 0) {
//       let n = deque.length;
//       for (let i = 0; i < n; i++) {
//         let [r, c] = deque.shift();
//         for (let [dr, dc] of direction) {
//           currRow = r + dr;
//           currCol = c + dc;
//           if (invalid(currRow, currCol) || visit.has(`${currRow},${currCol}`)) {
//             continue;
//           }
//           if (grid[currRow][currCol]) {
//             return res;
//           }
//           deque.push([currRow, currCol]);
//           visit.add(`${currRow},${currCol}`);
//         }
//       }
//       res += 1;
//     }
//   }
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (grid[i][j] === 1) {
//         dfs(i, j);
//         return bfs();
//       }
//     }
//   }
// };

// var topKFrequent = function (nums, k) {
//   const freqMap = new Map();
//   const bucket = [];
//   const result = [];

//   for (let num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }

//   for (let [num, freq] of freqMap) {
//     bucket[freq] = (bucket[freq] || new Set()).add(num);
//   }

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i]) result.push(...bucket[i]);
//     if (result.length === k) break;
//   }
//   return result;
// };

// var new21Game = function (n, k, maxPts) {
//   if (k == 0 || n >= k + maxPts) return 1.0;
//   let sum = 1.0;
//   let result = 0.0;
//   let dp = new Array(n + 1);
//   dp[0] = 1.0;
//   for (let i = 1; i <= n; i++) {
//     dp[i] = sum / maxPts;
//     if (i < k) sum += dp[i];
//     else result += dp[i];
//     if (i - maxPts >= 0) sum -= dp[i - maxPts];
//   }
//   return result;
// };

// var ParkingSystem = function (big, medium, small) {
//   this.count = [big, medium, small];
// };

// /**
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function (carType) {
//   return this.count[carType - 1]-- > 0;
// };

// var ListNode = function (key) {
//   this.key = key;
//   this.next = null;
// };

// var MyHashSet = function () {
//   this.size = 997;
//   this.buckets = Array(this.size).fill(null);
// };

// MyHashSet.prototype.hash = function (key) {
//   return key % this.size;
// };

// MyHashSet.prototype.getBucketAndNode = function (key) {
//   let index = this.hash(key);
//   let bucket = this.buckets[index];
//   return { index, bucket };
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function (key) {
//   let { index, bucket } = this.getBucketAndNode(key);
//   if (!bucket) {
//     this.buckets[index] = new ListNode(key);
//   } else {
//     let current = bucket;
//     while (current) {
//       if (current.key === key) return;
//       if (!current.next) break;
//       current = current.next;
//     }

//     current.next = new ListNode(key);
//   }
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function (key) {
//   let { index, bucket } = this.getBucketAndNode(key);
//   if (!bucket) return;
//   if (bucket.key === key) {
//     this.buckets[index] = bucket.next;
//     return;
//   }
//   let current = bucket;
//   while (current.next) {
//     if (current.next.key === key) {
//       current.next = current.next.next;
//       return;
//     }

//     current = current.next;
//   }
// };

// /**
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function (key) {
//   let { bucket } = this.getBucketAndNode(key);
//   let current = bucket;
//   while (current) {
//     if (current.key === key) return true;
//     current = current.next;
//   }
//   return false;
// };

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// var UndergroundSystem = function () {
//   this.avg = new Map();
//   this.train = new Map();
// };

// /**
//  * @param {number} id
//  * @param {string} stationName
//  * @param {number} t
//  * @return {void}
//  */
// UndergroundSystem.prototype.checkIn = function (id, start, t) {
//   this.train.set(id, [start, t]);
// };

// /**
//  * @param {number} id
//  * @param {string} stationName
//  * @param {number} t
//  * @return {void}
//  */
// UndergroundSystem.prototype.checkOut = function (id, end, t) {
//   const [start, s] = this.train.get(id);
//   const key = [start, end].join();
//   if (this.avg.has(key)) {
//     let [avg, cnt] = this.avg.get(key);
//     this.avg.set(key, [avg * (cnt / ++cnt) + (t - s) / cnt, cnt]);
//   } else {
//     this.avg.set(key, [t - s, 1]);
//   }
//   this.train.delete(id);
// };

// /**
//  * @param {string} startStation
//  * @param {string} endStation
//  * @return {number}
//  */
// UndergroundSystem.prototype.getAverageTime = function (start, end) {
//   return this.avg.get([start, end].join())[0];
// };

// var shortestPathBinaryMatrix = function (grid) {
//   const m = grid.length;
//   const isValid = (i, j) =>
//     i >= 0 && j >= 0 && i < m && j < m && grid[i][j] == 0;
//   const time = new Array(m).fill(null).map(() => new Array(m).fill(-1));

//   const bfs = () => {
//     if (grid[0][0] == 1) {
//       return;
//     }
//     const Q = [[0, 0]];
//     time[0][0] = 1;
//     while (Q.length) {
//       let [x, y] = Q.shift();
//       let t = time[x][y];

//       if (x == m - 1 && y == m - 1) return t;

//       for (let i = -1; i <= 1; i++) {
//         for (let j = -1; j <= 1; j++) {
//           if (i == 0 && j == 0) continue;
//           const X = x + i,
//             Y = y + j;
//           if (isValid(X, Y)) {
//             grid[X][Y] = 1;
//             Q.push([X, Y]);
//             time[X][Y] = t + 1;
//           }
//         }
//       }
//     }
//   };

//   bfs();
//   return time[m - 1][m - 1];
// };

// var numOfMinutes = function (n, headID, manager, informTime) {
//   manager.forEach((_, index) => timeFromEmployeeToHead(index));

//   return Math.max(...informTime);

//   function timeFromEmployeeToHead(id) {
//     if (manager[id] !== -1) {
//       informTime[id] += timeFromEmployeeToHead(manager[id]);
//       manager[id] = -1;
//     }
//     return informTime[id];
//   }
// };

var checkStraightLine = function (coordinates) {
  coordLen = coordinates.length;

  if (coordLen <= 2) return true;

  function calculateSlope(x1, y1, x2, y2, x, y) {
    return (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
  }

  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    let [x, y] = coordinates[i];
    if (calculateSlope(x1, y1, x2, y2, x, y) !== 0) {
      return false;
    }
  }

  return true;
};
