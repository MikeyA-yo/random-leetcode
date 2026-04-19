function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = [];
    // Start at index 0
    backtrack([], res, 0, target, candidates, 0); 
    return res;
}

function backtrack(
    n: number[], 
    res: number[][], 
    currentSum: number, 
    target: number, 
    candidates: number[], 
    start: number // New parameter
) {
    if (currentSum === target) {
        res.push([...n]);
        return;
    }
    if (currentSum > target) {
        return;
    }
    
    // Notice 'i' starts at 'start' instead of 0
    for (let i = start; i < candidates.length; i++) {
        n.push(candidates[i]);
        // Pass 'i' as the new 'start' so we don't look backwards
        backtrack(n, res, currentSum + candidates[i], target, candidates, i);
        n.pop();
    }
}

console.log(combinationSum([2,3,6,7], 7), combinationSum([2,3,5], 8))