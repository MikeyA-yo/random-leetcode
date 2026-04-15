function minimumDistance(nums: number[]): number {
    let minDistance = Number.MAX_VALUE;
    let hasGoodTuple = false;
    const lastTwoIndexes = new Map<number, [number, number] | [number]>();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const prev = lastTwoIndexes.get(value);

        if (!prev) {
            lastTwoIndexes.set(value, [i]);
            continue;
        }

        if (prev.length === 1) {
            lastTwoIndexes.set(value, [prev[0], i]);
            continue;
        }

        hasGoodTuple = true;
        const distance = 2 * (i - prev[0]);
        if (distance < minDistance) {
            minDistance = distance;
        }

        lastTwoIndexes.set(value, [prev[1], i]);
    }

    return hasGoodTuple ? minDistance : -1;
};
minimumDistance([1,1,1,1])