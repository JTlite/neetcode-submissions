class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxreact =0
        for i in range(len(heights)):
            left =i 
            right =i

            while left>0 and heights[i] <=heights[left-1]:
                left-= 1

            while right <len(heights)-1 and heights[i] <=heights[right+1]:
                right+=1

            area = heights[i]*(right-left+1)
            print(left ,right,area)
            maxreact = max(area,maxreact)
        return maxreact
