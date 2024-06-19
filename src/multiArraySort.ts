function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);

  // Another approach----------------------------------------------------
  // const merged = [];
  // let i = 0;
  // let j = 0;

  // while (i < arr1.length && j < arr2.length) {
  //   if (arr1[i] < arr2[j]) {
  //     merged.push(arr1[i]);
  //     i++;
  //   } else {
  //     merged.push(arr2[j]);
  //     j++;
  //   }
  // }
  // console.log(i, j);

  // while (i < arr1.length) {
  //   merged.push(arr1[i]);
  //   i++;
  // }

  // // console.log(j, "jFirst");
  // while (j < arr2.length) {
  //   merged.push(arr2[j]);
  //   j++;
  // }
  // // console.log(j, "jLast");
  // return merged;
}

const arr1 = [1, 3, 5, 7, 9, 11];
const arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(arr1, arr2));
