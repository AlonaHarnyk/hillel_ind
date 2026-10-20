// const name = 'Alona';
// const age = 35;
// const a = 'Kyiv';

// // const user = {
// //   name: name,
// //   age: age,
// // };

// const user = {
//   name,
//   age,
//   city: a,
// };

// console.log(user);

// const student = {
//   name: 'John',
//   email: 'john@gmail.com',
//   homeWorkResults: [],
//   getName() {
//     // return `Student name is ${student.name}`;
//     return `Student name is ${this.name}`;
//   },
//   getEmail() {
//     // console.log(`Student email is ${student.email}`);
//     console.log(`Student email is ${this.email}`);
//   },
//   addHomeworkResults(topic, success) {
//     const homework = {
//       topic,
//       success,
//     };
//     // student.homeWorkResults.push(homework);
//     this.homeWorkResults.push(homework);
//   },
// };

// console.log(student.name);
// console.log(student.getName());
// student.getEmail();
// student.addHomeworkResults('JS', false);
// student.addHomeworkResults('HTML', true);
// console.log(student.homeWorkResults);

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const animal = {
//   eyes: 2,
//   legs: 4,
// };

// console.log(animal);

// const dog = Object.create(animal);

// console.log(dog);

// dog.color = 'browm';

// console.log(dog);

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(Object.getOwnPropertyDescriptors(user, 'name'));

// Object.defineProperty(user, 'job', {
//   value: 'developer',
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// console.log(user);

// console.log(Object.keys(user));

// // user.job = 'tutor'; // error
// user.city = 'Lviv';

// delete user.city;
// delete user.job; // error

// console.log(user);

// const book = {
//   title: 'Test title',
//   author: 'Test author',
//   price: '3$',
//   test: {
//     a: 'test a',
//     b: 'test b',
//     c: 'test c',
//   },
//   rating: 5,
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book['price']);

// const {
//   title,
//   author: name,
//   price,
//   test: { a, b, c },
//   rating = 8,
// } = book;

// console.log(title);
// console.log(name);
// console.log(price);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rating);

// console.log(book);

const users = [
  { name: 'Olha', age: 19 },
  { name: 'Ann', age: 45 },
];

// for (const user of users) {
//   console.log(user.name);
//   console.log(user.age);
// }

// for (const user of users) {
//   const { name, age } = user;
//   console.log(name);
//   console.log(age);
// }

// for (const { name, age } of users) {
//   console.log(name);
//   console.log(age);
// }

// const numbers = ['red', 'green', 'blue'];

// // const [red, green, blue] = numbers;
// const [, , blue] = numbers;

// console.log(blue);

// console.log(numbers[2]);
