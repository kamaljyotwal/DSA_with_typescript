"use strict";
//Function signature and composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// Input:  [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
function compose(f, g) {
    let input = g;
    for (let i = 0; i < f.length; i++) {
        input = f[i](input);
    }
    console.log(input);
    return input;
}
console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 2));
//# sourceMappingURL=functionComposition.js.map