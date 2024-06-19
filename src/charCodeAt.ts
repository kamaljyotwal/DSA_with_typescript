function missingCharCode(str: string) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    console.log(code);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
}
console.log(missingCharCode("efghjk"));
