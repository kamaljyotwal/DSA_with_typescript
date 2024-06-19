// Function to find the character repeating the most in a string.
function mostRepeating(str: string) {
  const charCountMap = new Map<string, number>();

  for (const char of str) {
    const count = (charCountMap.get(char) || 0) + 1;
    charCountMap.set(char, count);
  }
  const entries = [...charCountMap.entries()].sort((a, b) => b[1] - a[1]);
  return [...entries][0][0];
}
console.log(mostRepeating("355385333888885"));

// Approach 2-----------------------------------------------------------------
// function mostRepeating(str: any) {
//   const charCount: { [any: string]: number } = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   const sortedCharCounts = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
//   return sortedCharCounts[0];
// }
