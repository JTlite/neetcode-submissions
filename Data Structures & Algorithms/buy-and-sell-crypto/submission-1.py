class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left =0
        right = left+1
        maxprofit =0
        while right<len(prices):
            print(left, right ,prices[left] , prices[right])
            if prices[left]<prices[right]:
                maxprofit = max(maxprofit, prices[right]-prices[left])
                right+=1
            else:
                left=right
                right+=1

        return maxprofit
