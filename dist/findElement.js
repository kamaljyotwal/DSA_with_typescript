"use strict";
function findElement(arr, func) {
    // find method only returns the first element that satisfies the condition, only 16 will be printed even if 4,2 also satisfies.
    return arr.find(func);
}
console.log(findElement([1, 17, 16, 2, 3, 4], (num) => num % 2 === 0));
// Approach 2-------------------------------------------------------------------------------
// function findElement(arr: number[], func: (num: number) => boolean) {
//   return arr.filter(func);
// }
//  Approach 3-------------------------------------------------------------------------------
// function findElement(arr: number[], func: (num: number) => boolean) {
//   // this will also return only first element satisfying the condition as we are returning from it hence stopping the loop and execution will be stopped.
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
//   return false;
// }
//-------------------------------------------------------------------------------
// Approach 4
// function findElement(arr: number[], func: (num: number) => boolean) {
//   let a = arr[arr.map(func).indexOf(true)];
//   return a;
// }
//# sourceMappingURL=findElement.js.map