//Say you have an array prices for which the ith element is the price of a given stock on day i.
//Design an algorithm to find the maximum profit. You may complete as many transactions as you like
//(i.e., buy one and sell one share of the stock multiple times).

//[1, 2, 5, 3, 6, 4]

function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
}

console.log(maxProfit([1, 0]));
