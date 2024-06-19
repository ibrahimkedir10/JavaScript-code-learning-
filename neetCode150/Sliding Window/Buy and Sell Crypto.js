/*
Buy and Sell Crypto
Solved 
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
*/

function maxProfit(prices) {
    if (prices.length <= 1) return 0; // If there's only one price or no price, profit is 0

let min = prices[0]; // Initialize min price as the first price
let maxProfit = 0; // Initialize max profit as 0

for (let i = 1; i < prices.length; i++) {
   if (prices[i] < min) {
       min = prices[i]; // Update min price if a smaller price is found
   } else {
       let profit = prices[i] - min; // Calculate profit for selling at prices[i]
       if (profit > maxProfit) {
           maxProfit = profit; // Update maxProfit if current profit is greater
       }
   }
}

return maxProfit;
}
