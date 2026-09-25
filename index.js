// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + '' + 1 + 0 - 10); // 700
// console.log('710bjk' - 10); // NaN
// console.log('' + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ''); // 'true'
// console.log(true + 'false'); // 'truefalse'
// console.log(true - 'false'); // NaN
// console.log(6 / '3'); // 2
// console.log('2' * '3'); // 6
// console.log(4 + 5 + 'px'); // '9px'
// console.log('$' + 4 + 5); // '$45'
// console.log('4' - 2); // 2
// console.log('4' + 2); // '42'
// console.log('4' / 2); // 2
// console.log('4px' - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log('  -9  ' + 5); // '  -9  5'

// // ❗️❗️❗️ Приведення до boolean
// const a = 5;
// console.log(Boolean(a));
// console.log(!!a);

// (falsy) значення, що приводяться до false у логічному перетворенні:
// 0
// NaN
// null
// undefined
// порожній рядок
// false

// Абсолютно все інше приводиться до true.

// ❗️❗️❗️  Логічні операторы (&&,  ||,  !)

// У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// && - запинається на false
// Якщо всі операнди були приведені до true, повертається остання.
// Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// || - запинається на true
// Повертає перше правдиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// ! - інвертує true в false, або false в true

// console.log(5 && 'test'); // 'test'
// console.log(0 && 6); // 0

// console.log(5 || 'test'); // 5
// console.log(0 || 6); // 6

// console.log(!5); // false
// console.log(!0); // true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && '' && 'kiwi'); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

// ?? - оператор нульового злиття

// console.log(null ?? 1); // 1;
// console.log(undefined ?? 1); // 1
// console.log(false ?? 1); // false
// console.log(0 ?? 1); // false

// ❗️❗️❗️ Оператори розгалудження

// const number1 = Number(prompt('Please, enter a number 1'));
// const number2 = Number(prompt('Please, enter a number 2'));

// if (number1 > number2) {
//   console.log('+');
// }

// if (number1 < number2) {
//   console.log('-');
// }

// if (number1 > number2) {
//   console.log('+');
// } else {
//   console.log('-');
// }

// if (number1 > number2) {
//   console.log('+');
// } else if (number1 < number2) {
//   console.log('-');
// } else if (number1 === number2) {
//   console.log('=');
// }

// if (number1 > number2) {
//   console.log('+');
// } else if (number1 < number2) {
//   console.log('-');
// } else {
//   console.log('=');
// }

// if (number1 === number2) {
//   console.log("=");
// } else {
//   if (number1 > number2) {
//     console.log("+");
//   } else {
//     console.log("-");
//   }
// }

// if (5 && true) {
//   console.log('here1');
// }

// if (false || 0) {
//   console.log('here2');
// }

// if (!null) {
//   console.log('here3');
// }
