class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        result = 0
        for ch in tokens:
            if ch in "+-*/":
                op1 = stack.pop()
                op2 = stack.pop()
                if ch == "+" :
                    result = op1+op2
                    stack.append(result)
                elif ch == "-" :
                    result = op2-op1
                    stack.append(result)
                elif ch == "*" :
                    result = op1*op2
                    stack.append(result)
                if ch == "/" and op1 !=0:
                    result = int(op2/op1)
                    stack.append(result)                 

            else:
                stack.append(int(ch))
        return stack[-1]