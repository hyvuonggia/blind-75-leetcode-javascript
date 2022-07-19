/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0];
    let max = Number.MIN_VALUE;

    nums.forEach((n) => {
        if (sum < 0) {
            sum = 0;
        }
        sum += n;
        max = Math.max(max, sum);
    });
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));