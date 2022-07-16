var containsDuplicate = function (nums) {
    const set = new Set();

    for (const num in nums) {
        if (set.has(nums[num])) {
            return true;
        } 
        set.add(nums[num]);
    }
    console.log(set);
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
