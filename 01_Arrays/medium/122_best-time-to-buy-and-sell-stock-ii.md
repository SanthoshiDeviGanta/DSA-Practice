# [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

## Approaches

[Greedy Approach](#greedy-approach)

---

## Greedy Approach

### Intuition:

The key idea here is to maximize the profit by capturing all upward price movements in the stock price. Instead of thinking about the best time to buy and sell, we can simply focus on buying the stock when we detect an upward trend (when today's price is lower than tomorrow's price).

### Solution:

When the prices go upwards, we can consider it as a potential transaction. Therefore, we accumulate profit any time there is a price increase from one day to the next by adding the difference to the total profit.

```javascript
function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    // If today's price is lower than tomorrow's, buy today and sell tomorrow
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}
```

### Time Complexity:

- **O(n)**, where n is the number of days, since we make a single pass through all the prices.

### Space Complexity:

- **O(1)**, as we are using a constant amount of extra space.
