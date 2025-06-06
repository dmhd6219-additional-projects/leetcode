from typing import List, Optional


class Solution:
    def removeDuplicates(self, nums: List[Optional[int]]) -> int:
        if len(nums) < 1:
            return 0

        k = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]
                k += 1

        return k


if __name__ == '__main__':
    s = Solution()
    arr = [0,0,1,1,1,2,2,3,3,4]
    print(s.removeDuplicates(arr))
    print(arr)
