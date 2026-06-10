class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        minRate = 1
        maxRate = max(piles)

        while minRate < maxRate :
            mid = minRate+(maxRate-minRate)//2
            sum = 0 
            for pile in piles :
                sum+=pile//mid
                if pile%mid != 0:
                    sum+=1

            if sum <= h:
                maxRate = mid
            else:
                minRate = mid+1

        return minRate


        
        