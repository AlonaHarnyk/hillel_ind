// ❗️❗️❗️ String method

// split

// const string = 't-e-s-t';
// console.log(string.split('-')); // ['t', 'e', 's', 't']

// const string2 = 'test';
// console.log(string2.split('')); // ['t', 'e', 's', 't']

// const string3 =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae!';
// console.log(string3.split(' ')); // ['t', 'e', 's', 't']

// ❗️❗️❗️ Array methods

// join

// const arr1 = ['a', 'b', 'c'];
// console.log(arr1.join('')); // 'abc'
// console.log(arr1.join('-')); // 'abc'
// console.log(arr1.join('*')); // 'abc'

// includes
// console.log(arr1.includes('a')); // true
// console.log(arr1.includes('y')); // false

// // indexOf
// console.log(arr1.indexOf("a")); // 0
// console.log(arr1.indexOf("y")); // -1

// push
// const arr2 = [];
// console.log(arr2.push(0)); // 1 (length)
// console.log(arr2);
// const length = arr2.push(1, 2, 3);
// console.log(arr2); // [0, 1, 2, 3]
// console.log(length); // 4

// // // pop;
// const elem = arr2.pop();
// console.log(arr2); // [0, 1, 2,]
// console.log(elem); // 3

// // // unshift
// const length1 = arr2.unshift(5, 6, 7);
// console.log(arr2); // [5, 6, 7, 0, 1, 2]
// console.log(length1); // 6

// // // shift
// const elem1 = arr2.shift();
// console.log(arr2); // [6, 7, 0, 1, 2]
// console.log(elem1); // 5

// // slice
// const arr3 = arr2.slice(0, 2);
// console.log(arr2); // [6, 7, 0, 1, 2]
// console.log(arr3); // [6, 7]

// splice
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deleted = arr4.splice(5, 2);
// console.log(arr4); // [1, 2, 3, 4, 5, 8, 9]
// console.log(deleted); // [6, 7]

// const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deleted1 = arr5.splice(5, 0, 11, 12, 13, 14, 15);
// // console.log(arr5); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 6, 7, 8, 9]
// // console.log(deleted1); // []

// const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deleted2 = arr6.splice(5, 2, 11, 12);
// // console.log(arr6); //[1, 2, 3, 4, 5, 11, 12, 8, 9]
// // console.log(deleted2); //[6, 7]

// ❗️❗️❗️ Objects

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: false,
  rating: 0,
  data: {
    a: 1,
    b: {
      test: 'test!!!',
      test1: {
        d: 10,
      },
    },
    c: 3,
  },
};

// const book1 = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: false,
//   rating: 0,
// };

// console.log(book === book1);

// const a = book.title;
// console.log(a);
// console.log(book.genres);
// console.log(book.data.a); // 1
// console.log(book.data.b.test);

// console.log(book['genres']);
// console.log(book[genres]); // error

// const x = 'author';

// console.log(book['author']); //  "Bernard Cornwell"
// console.log(book[x]) // "Bernard Cornwell"

// console.log(book.x) // undefined

// console.log(book['data']['a']); // 1

// console.log(book);

// book.isPublic = true;

// console.log(book);

// book.genres.push('tale');
// console.log(book);

// console.log(book.price);

// book.price = '10$';
// book['price'] = '10$';
// console.log(book);

// book.data.d = 'd';

// console.log(book);

// book.x.y = 'test'; // error (// book.x = {}; first)
