# Time: O(n)
# Space: O(n)

class Solution:
    def decodeString(self, s: str) -> str:
        stack = [] # will contain a tuple with structure: (string, k)

        num = 0
        string = ""
        for char in s:
            if char == "[":
                stack.append((string, num))
                num = 0
                string = ""
            elif char == "]":
                prev_string, k = stack.pop()

                string = prev_string + k * string
            elif char.isdigit():
                num = num * 10 + int(char)
            else:
                string += char
        
        return string
