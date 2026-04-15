function sumFourDivisors(nums: number[]): number {
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n <= 4) continue;

        let count = 0;
        let sum = 0;
        const limit = Math.floor(Math.sqrt(n));

        for (let j = 1; j <= limit; j++) {
            if (n % j !== 0) continue;

            const other = n / j;
            count += (j === other) ? 1 : 2;
            sum += (j === other) ? j : j + other;

            if (count > 4) break; 
        }

        if (count === 4) {
            totalSum += sum;
        }
    }

    return totalSum;
};

console.log(sumFourDivisors([7286,18704,70773,8224,91675]))