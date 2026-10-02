//  ❗️❗️❗️ Functions

// function add(number1, number2) {
//   const sum = number1 + number2;
//   console.log(sum);
// }

// add(10, 20);

// add(3, 7);

// function add1(number1, number2) {
//   //   return number1 + number2;
//   const sum = number1 + number2;
//   return sum;
// }

// // let sum = add1(10, 20);
// // console.log(sum);

// // sum += 10;

// // console.log(sum);

// console.log(add1(3, 7));

// function add2(number1, number2) {
//   const sum = number1 + number2;
//   console.log(sum);
//   return sum;
// }

// const result = add2(4, 16);
// console.log(result);

// function add3(number1, number2) {
//   const sum = number1 + number2;
//   return sum;
//   console.log(sum);
// }

// function compare(num1, num2) {
//   if (num1 > num2) {
//     return '>';
//   } else {
//     return '<';
//   }
// }

// console.log(compare(10, 5));

// const res = testReturn(5, 10);
// console.log(res);

// function testReturn(num1, num2) {
//   if (num1 > num2) {
//     console.log('here');
//     return;
//   }
//   console.log('there');
// }

// const res = testReturn(10, 5);
// console.log(res);

// const res1 = testReturn1(5, 10);
// console.log(res1);

// const testReturn1 = function (num1, num2) {
//   if (num1 > num2) {
//     console.log('here');
//     return;
//   }
//   console.log('there');
// };

// const res = testReturn1(10, 5);
// console.log(res);

//  ❗️❗️❗️ Arrays []

// const a = 5;

// const array = [1, 2, 3, 'a', 'b', true, [1, 2], a];

// console.log(array.length);

// console.log(array[5]);

// array[5] = 10;
// console.log(array);

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// for (let item of array) {
//   console.log(item);
//   if (item === 'a') {
//     break;
//   }
// }

// const b = 5;
// const c = 5;
// console.log(b === c); //true
// const d = b;
// console.log(d === b); //true

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false
// console.log([1, 2, 3] === [1, 2, 3]); // false
const arr3 = arr1;
// console.log(arr3 === arr1); // true

arr1[0] = 10;
// console.log(arr1); // [10, 2, 3]
// console.log(arr3); // [10, 2, 3]

arr3[2] = 5;

// console.log(arr1); // [10, 2, 5];

arr1.length = 0;

// console.log(arr1); // []
// console.log(arr3); // []

arr1[5] = 100;

// console.log(arr1);

// for (let item of arr1) {
//   console.log(item);
// }
// console.log(arr1[0]); // undefined
// console.log(arr1[200]); // undefined

// let arr4 = [1, 3, 5];
// let arr5 = arr4;

// arr4 = [4, 5, 6];

// console.log(arr4); // [4, 5, 6]
// console.log(arr5); // [1, 3, 5]

// console.log(arr4 == arr5); // false

// arr5 = arr4;

// console.log(arr4); // [4, 5, 6]
// console.log(arr5); // [4, 5, 6]

// const e = [1, 2, [3, 4]];
// const f = [1, 2, [3, 4]];

// console.log(e === f); // false

// console.log(e[0] === f[0]); // true
// console.log(e[2] === f[2]); // false

// console.log(e[2][0]); // 3
