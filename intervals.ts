function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result: number[][] = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        
        // If current overlaps with last, merge them
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, add as new interval
            result.push(current);
        }
    }
    
    return result;
};

console.log(merge([[1,4],[5,6]]), merge([[1,6],[1,3],[8,10],[1,3],[15,18]]))