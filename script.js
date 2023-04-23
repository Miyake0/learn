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

function countPositivesSumNegatives(input) {
  let sumPositive = 0;
  let sumNegative = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      sumPositive += input[i];
    }
    sumNegative -= input[i];
  }
  return sumPositive;
}
