class Solution:
    def isValid(self, s: str) -> bool:
        matches ={'}' :'{', ')' :"(","]" :"["}
        stack = []
        if len(s) == 1:
            return False
        for ch in s:
            if ch in "{[(" :
                stack.append(ch)
            else :
                if ch in matches and stack and stack[-1] == matches[ch] :
                    stack.pop()
                else :
                    return False
            print(stack)
        if len(stack) == 0:
            return True
        else:
            return False
                    