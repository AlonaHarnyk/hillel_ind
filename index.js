// <, >, <=, >=, ==, ===, !=, !==

// ❗️❗️❗️ Загальні правила порівняння

// Результатом порівняння буде булеве значення.

// При порівнянні різних типів JavaScript може приводити операнди
// до числового типу (для ==, !=, <, >, <=, >=).

// === та !== не виконують приведення типів.

// null дорівнює тільки null та undefined при нестрогому порівнянні:
// null == null → true
// null == undefined → true

// undefined дорівнює тільки undefined та null при нестрогому порівнянні:
// undefined == undefined → true
// undefined == null → true

// NaN не дорівнює нічому, навіть самому собі:
// NaN === NaN → false
// NaN == NaN → false

// Якщо обидва операнди — рядки, вони порівнюються посимвольно
// за значеннями Unicode.

// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log('123' == 123); // true
// console.log(4 == 5); // false
// console.log('123' === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false
// console.log('4' != 4); // false
// console.log('4' !== 4); // true

// ❗️❗️❗️ Приведення до числа
// const a = '5';
// const b = Number(a);
// const c = +a;
// console.log(b);
// console.log(c);

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// const str1 = String(num);
// console.log(str1);
// const str2 = num + '';
// console.log(str2);

// ❗️❗️❗️ Шаблонні рядки
// const userName = prompt('What is your name?');
// console.log(userName);

// const text = 'My name is Alona';
// const text1 = `My name is ${userName}`;

// console.log(text1);

// const age = prompt('How old are you?');
// console.log(age);

// const text2 = `I'm ${age} years old`;
// console.log(text2);

// // ❗️❗️❗️ length
// const a = 'erjejnretlknhkt';
// console.log(a.length); // довжина

// ❗️❗️❗️ Методи рядків

// const word = 'tEsT';
// console.log(word.toLowerCase()); // test
// console.log(word.toUpperCase()); // TEST

const word1 = 'superjavascript';
// console.log(word1.includes('super')); // true
// console.log(word1.includes('html')); // false

// console.log(word1.indexOf('java')); // 5
// console.log(word1.indexOf('html')); // -1
// console.log(word1.indexOf("a")); // 6
// console.log(word1.lastIndexOf("a")); // 8

// const word2 = '    string ';
// console.log(word2.trim());

// const word3 = word1.slice();
// console.log(word3); // копія
// console.log(word1.slice(0)); // копія
// console.log(word1.slice(0, word1.length)); // копію

// console.log(word1.slice(5)); //javascript
// console.log(word1.slice(0, 5)); //super

// console.log(word1[5]); // j
// console.log(word1[0]); // s
// console.log(word1[word1.length - 1]); // t
