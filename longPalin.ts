function longestPalindrome(s: string): string {
  let maxPalin = [];
  if (s.split("").every((char) => char === s[0])) return s;
  for (let i = 0; i < s.length; i++) {
    let substr = [];
    for (let j = i; j < s.length; j++) {
      substr.push(s[j]);
      console.log("substr:", substr,s[j],s[i]);
      if (
        substr.length > 0 &&
        substr.join("") === substr.toReversed().join("") &&
        substr.length > maxPalin.length
      ) {
        if (s.length === 1) return s;
        maxPalin.push(substr.join(""));
      }
    }
  }
  let max  = maxPalin.reduce((a, b) => (a.length > b.length ? a : b), "");
  console.log(maxPalin, "max:", max);
  return max;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bananas")); 
