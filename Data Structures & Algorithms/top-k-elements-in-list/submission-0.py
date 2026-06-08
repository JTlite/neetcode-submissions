class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            if num in freq:
                freq[num] += 1
            else:
               freq[num] = 1

        result = sorted(freq , key = lambda x: freq[x], reverse=True)[:k]
        return result
        
        
        