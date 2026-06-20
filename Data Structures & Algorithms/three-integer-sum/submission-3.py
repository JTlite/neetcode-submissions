class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        news = sorted(nums)
        sol = []

        curr = 0
        while curr < len(news) - 2:

            if curr > 0 and news[curr] == news[curr - 1]:
                curr += 1
                continue

            left = curr + 1
            right = len(news) - 1

            while left < right:
                total = news[curr] + news[left] + news[right]

                if total == 0:
                    sol.append([news[curr], news[left], news[right]])

                    left += 1
                    right -= 1

                    while left < right and news[left] == news[left - 1]:
                        left += 1

                    while left < right and news[right] == news[right + 1]:
                        right -= 1

                elif total > 0:
                    right -= 1
                else:
                    left += 1

            curr += 1

        return sol