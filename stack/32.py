# Time: O(n)
# Space: O(n)

class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        longest = 0
        
        for i, p in enumerate(s):
            if p == "(":
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    longest = max(longest, i - stack[-1])
        
        return longest
        
