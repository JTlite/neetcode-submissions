class Solution:
    def maxArea(self, heights: List[int]) -> int:
        i=0
        j=len(heights)-1
        maxarea=0
        while i<j:
            minHeight = min(heights[i],heights[j])
            area = minHeight*(j-i)
            maxarea= max(maxarea, area)
            if minHeight == heights[i]:
                i+=1
            else :
                j-=1
        

        return maxarea