"use strict";
// Function to find most repeating character in a string.
function mostRepeating(str) {
    const charCountMap = new Map();
    for (const char of str) {
        const count = (charCountMap.get(char) || 0) + 1;
        charCountMap.set(char, count);
    }
    return [...charCountMap][0][0];
}
// --------------------------------------------
// Another Approach
// function mostRepeating(str: any) {
//   const charCount: { [any: string]: any } = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   const sortedCharCounts = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
//   return sortedCharCounts[1];
// }
// ----------------------------------------------
// Another approach -> I used this, Issues in it AI found insufficiency
// function mostRepeating(str: string) {
//   let a = [...str].sort((a: string, b: string) => a.localeCompare(b));
//   let result = {};
//   for (let i = 0; i < a.length; i++) {
//     let b = a.lastIndexOf(a[i]) - a.indexOf(a[i]) + 1;
//     result = { ...result, [a[i]]: b };
//   }
//   return Object.keys(result)[1];
// }
// usage
console.log(mostRepeating("3553853335"));
//# sourceMappingURL=mostRepeatingString.js.map