// Task 1
let userName: string = "Elyorbek";
let userAge: number = 21;

console.log(`Task 1:\nName : ${userName} and Age: ${userAge}`);

// Task 2
let son: number = 2;
if (1) {
  let son: number = 45;
}
console.log(`Task 2:\n son o'zgaruchi qiymati ${son}\n`);

const constNum: string = "Salomey";
// const qiymatni o'zgartirish mumkin emas shunchun foydasi yo error beradi
var boolVar: boolean = true;
if (1) {
  var boolVar: boolean = false;
}
console.log(`var orqali { } lar ichida o'zgaruvchi ochish natija : ${boolVar}`);

// Task 3
let son1: number = 2;
let son2: number = 4;
console.log(`Task 3\nAdd : ${son1 + son2}`);

let newString: string = "Qale";
console.log(newString + "Zormisan");

const justShow = 123;
console.log(justShow);

// Task 4
let raqam: number = 123;
// raqam="O'zgarsa kerak";   xato berdi shu yerda
console.log(`Task 4\n Raqam : ${raqam}`);

// Task 5
let typeNumber: number = 23;
console.log(`Task 5\n Type of typeNumber: ${typeof typeNumber}`);

// Task 6
let stringValue: string = "5432";
let newInt: number = parseInt(stringValue);
console.log(`Task 6\n Parse Value: ${newInt}`);

// Task 7
type User = {
  id: number;
  name: string;
  age: number;
};

const newUser: User = {
  id: 1,
  name: "Elyorbek",
  age: 21,
};

console.log(
  `Task 7\n User Id:${newUser.id}\nUser Name:${newUser.name}\nUser age:${newUser.age}\n`
);

// Task 8
const sonlar: number[] = [1, 2, 3, 4, 5, 6];
sonlar.push(7);
sonlar.push(8);
sonlar.pop();
console.log(`Task 8\n Sonlar: ${sonlar}`);

// Task 9
enum Color {
  Red,
  Green,
  White,
  Blue,
}
console.log("Task 9\n Ranglar:", Color);
let selectedColor: Color = Color.Green;
console.log("Tanlangan rang:", selectedColor);

// Task 10
let isNull: null = null;
let isUndefined: undefined = undefined;
console.log("Task 10\n isNull:", isNull);
console.log("isUndefined:", isUndefined);