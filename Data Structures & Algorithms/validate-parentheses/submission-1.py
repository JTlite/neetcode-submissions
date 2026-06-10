class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            if ch == "{" or ch == "[" or ch == "(" :
                stack.append(ch)
            elif stack and ((ch == "]" and stack[-1] == "[") or (ch == "}" and stack[-1] == "{") or (ch == ")" and stack[-1] == "(")):
                stack.pop()
            else :
                stack.append(ch)
            print(stack)
        if len(stack) == 0:
            return True
        else:
            return False
