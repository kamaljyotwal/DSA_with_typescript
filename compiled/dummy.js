"use strict";
// function titleCase(str: string) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(titleCase("i'm a little tea pot"));
// function frankenSplice(arr1: number[], arr2: number[], n: number) {
//   let arr1Copy = [...arr1];
//   let arr2Copy = [...arr2];
//   arr1Copy.splice(n, 0, ...arr2Copy);
//   return arr1Copy;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));
// function getIndexToIns(arr: number[], num: number) {
//   arr.push(num);
//   arr.sort((a, b) => a - b);
//   return arr.indexOf(num);
// }
// console.log(getIndexToIns([40, 60], 50));
// function chunkArrayInGroups(arr: number[], size: number) {
//   let result: number[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// // rabbit.__proto__ = animal;
// Object.setPrototypeOf(rabbit, animal);
// console.log(animal);
// console.log(rabbit);
// console.log(animal.isPrototypeOf(rabbit));
// console.log(rabbit.isPrototypeOf(animal));
// const users = [
//   { name: "jon", age: 35 },
//   { name: "amy", age: 20 },
//   { name: "camper", age: 10 },
// ];
// type result = { [key: string]: number };
// let a = users.reduce((acc: result, i) => {
//   acc[i.name] = i.age;
//   return acc;
// }, {});
// console.log(a);
// function destroyer(arr0: number[], ...arr: number[]) {
//   return arr0.filter((i) => !arr.includes(i));
// }
// console.log(destroyer([1, 2, 3, 4, 5], 2, 3));
