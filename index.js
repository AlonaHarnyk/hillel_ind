// SPREAD ...

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);

// const arr3 = [4, 5, [8, 9]];
// const arr4 = [6, 7];

// // const arr5 = [...arr3, ...arr4, ...arr4];
// const arr5 = [arr3[0], arr3[1], ...arr3[2], ...arr4];

// console.log(arr5);

// // const arr6 = arr3.concat(arr4);

// // console.log(arr6);

// const arr7 = [10, 20, 30];
// const arr8 = [40, 50];

// arr7.push(arr8[0]);
// arr7.push(arr8[1]);

// arr7.push(arr8[0], arr8[1]);

// arr7.push(...arr8);

// console.log(arr7);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// const obj4 = { a: 1, b: 2 };
// const obj5 = { c: 3, d: 4 };
// const obj6 = { b: 10, c: 20, e: 30 };
// const obj7 = { ...obj6, ...obj5, ...obj4, b: 50 };

// console.log(obj7);

// REST ...

// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2);

// function add(...args) {
//   // console.log(arguments);
//   console.log(args);
//   let sum = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   sum += args[i];
//   // }
//   for (let num of args) {
//     sum += num;
//   }
//   console.log(sum);
// }

// add(1, 2);

// add(1, 2, 5);

// add(1, 2, 3, 4, 5);

// const array = [1, 2, 3, 4, 5];
// const [one, two, ...arr] = [1, 2, 3, 4, 5];

// console.log(arr);

// const object = {
//   title: 'Test title',
//   author: 'Test author',
//   price: '3$',
//   rating: 5,
// };

// const { title, price, ...obj } = object;

// console.log(obj);

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const foo = (a, b) => {
//   return { a, b };
// };

// const foo = (a, b) => ({ a, b });

// callbacks

// function f1() {
//   const mark = Number(prompt('What is your mark?'));
//   if (mark >= 10) {
//     alert('It is great!');
//   } else {
//     alert('You can better!');
//   }
// }

// f1();

// function f2() {
//   const mark = Number(prompt('What is your mark?'));
//   if (mark >= 10) {
//     alert('It is excellent mark!');
//   } else {
//     alert('It is bad mark!');
//   }
// }

// f2();

// function f3(foo1, foo2) {
//   const mark = Number(prompt('What is your mark?'));
//   if (mark >= 10) {
//     foo1();
//   } else {
//     foo2();
//   }
// }

// function goodMark() {
//   alert('It is excellent mark!');
// }

// function goodMark1() {
//   alert('It is great!');
// }

// function badMark() {
//   alert('It is bad mark!');
// }

// function badMark1() {
//   alert('You can better!');
// }

// f3(goodMark, badMark);
// f3(goodMark1, badMark1);

// function f3(callback) {
//   const mark = Number(prompt('What is your mark?'));
//   callback(mark);
// }

// function showMark(mark) {
//   const isMarkGood = mark >= 10;
//   if (isMarkGood) {
//     alert('It is excellent mark!');
//   } else {
//     alert('It is great!');
//   }
// }

// f3(showMark);
