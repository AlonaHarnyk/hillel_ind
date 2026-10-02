// const e = [1, 2, [3, 4]];
// const f = [1, 2, [3, 4]];

// // console.log(e === f);

// // console.log(e[0] === f[0]); //
// // console.log(e[2] === f[2]); //

// console.log(e[2][0]); //

// String method

// split

// const string = "t-e-s-t";
// console.log(string.split("-")); // ['t', 'e', 's', 't']

// ❗️❗️❗️ Array methods

// // join
// const arr6 = ["a", "b", "c"];
// console.log(arr6.join("")); // 'abc'

// includes
// console.log(arr6.includes("a")); // true
// console.log(arr6.includes("y")); // false

// // indexOf
// console.log(arr6.indexOf("a")); // 0
// console.log(arr6.indexOf("y")); // -1

// push
const arr7 = [];
const length = arr7.push(1, 2, 3);
// console.log(arr7); // [1, 2, 3]
// console.log(length); // 3

// pop
const elem = arr7.pop();
// console.log(arr7); // [1, 2]
// console.log(elem); // 3

// unshift
const length1 = arr7.unshift(5, 6, 7);
// console.log(arr7); // [5, 6, 7, 1, 2]
// console.log(length1); // 5

// shift
const elem1 = arr7.shift();
// console.log(arr7); // [6, 7, 1, 2]
// console.log(elem1); // 5

// slice
// const arr8 = arr7.slice(0, 2);
// console.log(arr7); // [6, 7, 1, 2]
// console.log(arr8); // [6, 7]

// splice
// const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deleted = arr9.splice(5, 2);
// console.log(arr9); // [1, 2, 3, 4, 5, 8, 9]
// console.log(deleted); // [6, 7]

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleted1 = arr10.splice(5, 0, 11, 12, 13, 14, 15);
// console.log(arr10); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 6, 7, 8, 9]
// console.log(deleted1); // []

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deleted2 = arr11.splice(5, 2, 11, 12);
// console.log(arr11); //[1, 2, 3, 4, 5, 11, 12, 8, 9]
// console.log(deleted2); //[6, 7]
