function lengthOfLongestSubstring(s: string): number {
    let hasRepeated = false;
    let lastMaxSubStrNo = 0;
    let lastMaxSeq = "";
    let sArr = s.split("");
    for (let i  = 0; i < sArr.length; i++){
        // check if current char has repeated (update hasRepeated if)
        // else add the character to lastmaxseq 
        // when a character repeats clear lastmax seq
        // if at any point the current lastMaxSeq length is bigger than
        // last max sub str, update it
        if (lastMaxSeq.includes(sArr[i])){
            hasRepeated = false;
             lastMaxSeq = lastMaxSeq.slice(lastMaxSeq.indexOf(sArr[i]) + 1)
             lastMaxSeq += sArr[i];
        }else{
            lastMaxSeq += sArr[i]
        }
        console.log("lastMaxSeq:", lastMaxSeq)
        if (lastMaxSeq.length > lastMaxSubStrNo){
            lastMaxSubStrNo = lastMaxSeq.length
        }
    }
    return lastMaxSubStrNo;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("aab")); 
console.log(lengthOfLongestSubstring("dvdf"))