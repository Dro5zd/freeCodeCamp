// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// // Only change code below this line
// const wordBlanks =
//   "This white " +
//   myNoun +
//   " was " +
//   myAdjective +
//   " and angry. And I " +
//   myVerb +
//   " so " +
//   myAdverb +
//   "!"; // Change this line
// // Only change code above this line
// console.log(wordBlanks);

// //// МАССИВЫ //////
// // Only change code below this line
// const myArray = ["JavaScript", 81];

// // Only change code below this line
// const myArray1 = [
//   ["Argentina", 5],
//   ["Jamaica", 0],
// ];

// //обращение к элементу массива
// const myArray2 = [50, 60, 70];
// const myData = myArray2[1];

// /// Замена элемента в массиве
// // Setup
// const myArray3 = [18, 64, 99];

// // Only change code below this line
// myArray3[0] = 45;

// ///Мултивложенность в массиве. При каждом написании'[]' ты обращаешься к новому уровню вложенности в массиве
// const myArray4 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// const myData4 = myArray4[2][1];

// // Добавление данных в конец массива
// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];
// myArray.push(["dog", 3]);

//Удаление последней позиции из массива

// Setup
// const myArray5 = [
//   ["John", 23],
//   ["cat", 2],
// ];

// // Only change code below this line
// const removedFromMyArraay = myArray5.pop();
// console.log(removedFromMyArraay);

// //Удаление первого элемента .shift
// const myArray6 = [
//   ["John", 23],
//   ["dog", 3],
// ];

// // Only change code below this line
// const removedFromMyArraay2 = myArray6.shift();
// console.log(removedFromMyArraay2);

//Добавление элемента в начало массива .unshift()

//Setup
const myArray7 = [
  ["John", 23],
  ["dog", 3],
];
myArray7.shift();

// Only change code below this line
myArray7.unshift(["Paul", 35]);
console.log(myArray7);
