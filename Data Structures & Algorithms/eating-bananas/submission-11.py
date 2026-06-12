class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        maxRate = max(piles)
        minRate = 1
        while minRate <=maxRate :
            mid = minRate+ (maxRate - minRate)//2
            
            totalHours = 0
            for pile in piles:
                totalHours += math.ceil(pile/mid)
            
            if totalHours <= h:
                maxRate =mid-1
            else :
                minRate=mid+1

        return minRate