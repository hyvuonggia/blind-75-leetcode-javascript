/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();

    for (i in nums) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)];
        } else {
            map.set(nums[i], i);
        }
    }
    return null;
};


console.log(twoSum([2, 7, 11, 15], 9));
