"use strict";
function truncateString(str, num) {
    if (!str || num < 0)
        throw new Error("Invalid input");
    if (num > str.length)
        return str;
    return str.slice(0, num) + "...";
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 15));
//# sourceMappingURL=truncateString.js.map