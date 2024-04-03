// Task 1
var userName = "Elyorbek";
var userAge = 21;
console.log("Task 1:\nName : ".concat(userName, " and Age: ").concat(userAge));
// Task 2
var son = 2;
if (1) {
    var son_1 = 45;
}
console.log("Task 2:\n son o'zgaruchi qiymati ".concat(son, "\n"));
var constNum = "Salomey";
// const qiymatni o'zgartirish mumkin emas shunchun foydasi yo error beradi
var boolVar = true;
if (1) {
    var boolVar = false;
}
console.log("var orqali { } lar ichida o'zgaruvchi ochish natija : ".concat(boolVar));
// Task 3
var son1 = 2;
var son2 = 4;
console.log("Task 3\nAdd : ".concat(son1 + son2));
var newString = "Qale";
console.log(newString + "Zormisan");
var justShow = 123;
console.log(justShow);
// Task 4
var raqam = 123;
// raqam="O'zgarsa kerak";   xato berdi shu yerda
console.log("Task 4\n Raqam : ".concat(raqam));
// Task 5
var typeNumber = 23;
console.log("Task 5\n Type of typeNumber: ".concat(typeof typeNumber));
// Task 6
var stringValue = "5432";
var newInt = parseInt(stringValue);
console.log("Task 6\n Parse Value: ".concat(newInt));
var newUser = {
    id: 1,
    name: "Elyorbek",
    age: 21,
};
console.log("Task 7\n User Id:".concat(newUser.id, "\nUser Name:").concat(newUser.name, "\nUser age:").concat(newUser.age, "\n"));
// Task 8
var sonlar = [1, 2, 3, 4, 5, 6];
sonlar.push(7);
sonlar.push(8);
sonlar.pop();
console.log("Task 8\n Sonlar: ".concat(sonlar));
// Task 9
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log("Task 9\n Ranglar:", Color);
var selectedColor = Color.Green;
console.log("Tanlangan rang:", selectedColor);
// Task 10
var isNull = null;
var isUndefined = undefined;
console.log("Task 10\n isNull:", isNull);
console.log("isUndefined:", isUndefined);
