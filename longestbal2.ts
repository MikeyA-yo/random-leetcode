function longestBalanced(s: string): number {

    let chars = s.split('')

    let maxBalanced = 1

    for (let i = 0; i < chars.length; i++){

    //    let substringC = new Map()
           let counts = new Int32Array(3)
           let distinctCount = 0;
           let maxFreq = 0;

       for (let j = i; j < chars.length; j++){
           // 1. Update Counts
            const charCode = chars[j].charCodeAt(j);
            const idx = charCode === 97 ? 0 : charCode === 98 ? 1 : 2;

            if (counts[idx] === 0) distinctCount++;
            counts[idx]++;

            // 2. Update Max Frequency
            if (counts[idx] > maxFreq) maxFreq = counts[idx];

            // 3. The Comparison
            const currentLen = j - i + 1;
            if (currentLen === distinctCount * maxFreq) {
                if (currentLen > maxBalanced) {
                    maxBalanced = currentLen;
                }
            }
       }

    }

    return maxBalanced

};

console.log(longestBalanced("abcabcbb")); // 3
console.log(longestBalanced("aab"));
console.log(longestBalanced("abbac"))