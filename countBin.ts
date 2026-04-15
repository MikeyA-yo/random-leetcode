function countBinarySubstrings(s: string): number {
  let result = 0;
  let prevCount = 0;
  let currCount = 1;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currCount++;
    } else {
      result += Math.min(prevCount, currCount);
      prevCount = currCount;
      currCount = 1;
    }
  }
  
  result += Math.min(prevCount, currCount);
  
  return result;
}

console.log(countBinarySubstrings("00110011")); // 6
console.log(countBinarySubstrings("10101")); // 4