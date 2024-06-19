"use strict";
//Function signature and composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// Input:  [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
function compose(f, g) {
    let input = g;
    // reversing the order of loop exececution as result of last element is going in result of second last and so on f(g(h(x)))
    for (let i = f.length - 1; i >= 0; i--) {
        input = f[i](input);
    }
    return input;
}
console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 2));
//# sourceMappingURL=functionComposition.js.map