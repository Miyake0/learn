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

const first = [1, 2, 3, 4];
const second = [4, 5, 3, 6];
const duplicate = [];

const array = first.concat(second);

function intersertion(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (first[i] == second[j]) {
        duplicate.push(array[i]);
        j++;
      } else {
        i++;
        j++;
      }
    }
  }
}

intersertion(duplicate);

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
