// // ❗️❗️❗️ Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;
// console.log(b);
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;
// console.log(b);

// let a;

// console.log(a);

// a = 10;

// console.log(a);

// a = 20;

// console.log(a);

// a = 100;

// console.log(a);

// ❗️❗️❗️ Примітивний типи

// number
// string
// boolean
// null
// undefined
// bigint
// symbol

// const a = null;

// console.log(typeof a);

// ❗️❗️❗️ Взаємодія з користувачем

// // - виведення даних:

// console.log('Hello!');
// alert('Hello!');

// // - отримання даних:

// const answer = confirm('Is your name Ivan?'); // користувач може відповісти так або відхилити питання
// console.log(answer);
// prompt('What is your name?'); // користувач  може ввести якісь дані або відхилити питання
// const age = prompt('How old are you?');
// console.log(age);
// // console.log(typeof age);

// const num = Number(age);
// console.log(num);

// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// ❗️❗️❗️ Number.isNaN / isNaN

// const a = 123;
// const b = 'qwerty';

// // console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// // const toNumber = Number(b);
// // console.log(toNumber); // NaN
// // console.log(Number.isNaN(toNumber)); // true

// console.log(isNaN(b)); // true

// const num1 = 5;
// const num2 = 10;
// const sum = num1 + num2;
// console.log(sum);

// console.log(10 - 5);
// console.log(2 * 5);
// console.log(10 / 5);

// let value = 5;

// value = value + 10;
// console.log(value); // 15
// value = value + 10;
// console.log(value); // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;

// value1 = value1 - 2;
// console.log(value1); // 8
// value1 = value1 - 2;
// console.log(value1); // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// const num1 = Number.parseInt('56823.38erkjgvberk');
// console.log(num1);
// const num2 = Number.parseFloat('56823.38erkjgvberk');
// console.log(num2);

// const a = 0.1 + 0.2;
// console.log(a);
// console.log(a.toFixed(1));
// const b = 0.3 + 0.6;
// console.log(b);
// console.log(b.toFixed(1));
