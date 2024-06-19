"use strict";
function largestOfFour(args) {
    //Best Approach
    let b = args.reduce((acc, i) => [...acc, Math.max(...i)], []);
    return b;
    //Approach 2
    // let a = args.map((arr) => Math.max(...arr));
    // console.log(a);
    //Approach 3
    //   let res: number[] = [];
    //   for (let i = 0; i < args.length; i++) {
    //     res = [...res, args[i].sort((a, b) => b - a)[0]];
    //   }
    //   return res;
}
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]));
//# sourceMappingURL=largestOfFour.js.map