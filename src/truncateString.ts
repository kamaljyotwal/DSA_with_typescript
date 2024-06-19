function truncateString(str: string, num: number): string {
  if (!str || num < 0) throw new Error("Invalid input");
  if (num > str.length) return str;

  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 15));


