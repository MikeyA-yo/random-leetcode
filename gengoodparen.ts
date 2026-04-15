function generateParenthesis(n: number): string[] {
    let result: string[] = []

    backtrack('', 0, 0, n, result)
    return result
};

function backtrack(s: string, open: number, close: number, max: number, result: string[]) {
    if (s.length === max * 2) {
        result.push(s)
        return
    }
    if (open < max) {
        backtrack(s + '(', open + 1, close, max, result)
    }    
    if (close < open) {
        backtrack(s + ')', open, close + 1, max, result)
    }
}
console.log(generateParenthesis(3))