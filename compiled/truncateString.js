"use strict";
function truncateString(str, num) {
    if (str.length <= num)
        return str;
    return str.slice(0, num) + "...";
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 15));
