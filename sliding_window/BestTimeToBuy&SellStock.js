/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));




