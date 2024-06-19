function sortedUnion(...arrays: number[][]): number[] {
  return [...new Set(arrays.flat().sort())];
}

console.log(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]));
