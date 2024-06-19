function findElent(arr: number[], func: (num: number) => boolean) {
  return arr.find(func);
}
console.log(findElent([1, 17, 16, 2, 3, 4], (num) => num % 2 === 0));
// -------------------------------------------------------------------------------

// Approach 2
// function findElent(arr: number[], func: (num: number) => boolean) {
//   return arr.filter(func)[0];
// }
//-------------------------------------------------------------------------------

// Approach 3
// function findElent(arr: number[], func: (num: number) => boolean) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
//   return false;
// }
//-------------------------------------------------------------------------------
// Approach 4
// function findElent(arr: number[], func: (num: number) => boolean) {
//  let a = arr[arr.map(func).indexOf(true)]
//  console.log(a)
// }
