// Function to find most repeating character in a string.
function mostRepeating(str: string) {
  const charCountMap = new Map<string, number>();
  for (const char of str) {
    const count = (charCountMap.get(char) || 0) + 1;
    charCountMap.set(char, count);
  }

  const entries = [...charCountMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(entries);

  return [...entries][1][0];
}
// // --------------------------------------------
// Another Approach
// function mostRepeating(str: any) {
//   const charCount: { [any: string]: any } = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//    //charCount
//   const sortedCharCounts = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
//   console.log(Object.entries(charCount))
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
console.log(mostRepeating("355385333888885"));