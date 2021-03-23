/**
 * algorithim does not satisfy all the requirements
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let tempCheapestDay = 0;
    let cheapestDay = 0;
    // find the cheapest day
    for (let i = 0; i < prices.length; i++) {
        if (prices[tempCheapestDay] > prices[i]) {
            tempCheapestDay = i;
        }
    }
    cheapestDay = tempCheapestDay;
    console.log(prices[cheapestDay]);

    // now we know what is the cheapest day, and we cannot go backwards in "time", then we can safely ignore everything to the left of the now known index/day
    let tempProfit = 0;
    let maxProfit = 0;
    for (let i = cheapestDay; i < prices.length; i++) {
        tempProfit = prices[i] - prices[cheapestDay];
        maxProfit = Math.max(maxProfit, tempProfit);
    }
    console.log(maxProfit);
    return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4])