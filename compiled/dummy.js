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
// console.log(getIndexToIns([40, 60], 20));
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
// // rabbit.__proto__ = animal; // gives error in ts, because its non-standard and not part of EcmaScript
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
// //   console.log(arr)
//   return arr0.filter((i) => !arr.includes(i));
// }
// console.log(destroyer([1, 2, 3, 4, 5], 2, 3));
// interface MathFunction {
//   (x: number, y: number): number;
// }
// let add: MathFunction = function (x: number, y: number): number {
//   return x + y;
// };
// console.log(add(2, 5));
// class Example {
//   private secret: string;
//   constructor(secret: string) {
//     this.secret = secret;
//   }
//   getSecret(): string {
//     return this.secret;
//   }
// }
// const example = new Example("classified");
// console.log(example.getSecret());
// // console.log(example.secret) // error
// -----------------------------------------------------
// abstract class PaymentProcessor {
//   protected abstract processPayment(amount: number): void;
//   public handlePayment(amount: number): void {
//     this.logTransaction(amount);
//     this.processPayment(amount);
//     this.sendReceipt();
//   }
//   private logTransaction(amount: number): void {
//     console.log(`Processing payment for $${amount}`);
//   }
//   private sendReceipt(): void {
//     console.log("Receipt sent to customer.");
//   }
// }
// class CreditCardProcessor extends PaymentProcessor {
//   protected processPayment(amount: number): void {
//     console.log(`$${amount} paid using Credit Card.`);
//   }
// }
// class PayPalProcessor extends PaymentProcessor {
//   protected processPayment(amount: number): void {
//     console.log(`$${amount} paid using PayPal.`);
//   }
// }
// const creditPayment = new CreditCardProcessor();
// creditPayment.handlePayment(100);
// const paypalPayment = new PayPalProcessor();
// paypalPayment.handlePayment(200);
// --------------------------------------------------------------------
// const data = {
//   first: "kk",
//   last: "j",
//   age: 30,
// } as const;
// data.age = 20; //cant reassign
// console.log(data);
// -----------------------------------------------
// function countAndSortCharacters(str: string) {
//   const counts: { [key: string]: number } = {};
//   // Count each character and put in result object
//   for (const char of str) {
//     if (counts[char]) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   }
//   // // Convert the counts object to an array of [char, count] pairs
//   const sorted = Object.entries(counts);
//   // // Sort the array by count and then by character if counts are equal
//   sorted.sort((a: any, b: any) => {
//     if (a[1] === b[1]) {
//       return a[0].localeCompare(b[0]); // Sort alphabetically if counts are the same
//     }
//     return b[1] - a[1]; // Sort by count in descending order
//   });
//   // Print or return the sorted array
//   console.log(sorted);
//   return sorted;
// }
// countAndSortCharacters("hello world");
// let a = new Promise((resolve, reject) => {
//   let val = false;
//   if (val) {
//     resolve("resolved");
//   } else {
//     reject("rejected");
//   }
// });
// a.then((res) => console.log(res)).catch((rej) => console.log(rej));
// ====================================================
Promise.resolve().then(() => console.log(1));
setTimeout(() => {
    console.log(2);
}, 10);
queueMicrotask(() => {
    console.log(3);
    queueMicrotask(() => console.log(4));
});
console.log(5);
// =====================================================
//# sourceMappingURL=dummy.js.map