class MinStack:

    def __init__(self):
        self.stack = []
        

    def push(self, val: int) -> None:
        stack = self.stack
        stack.append(val)

    def pop(self) -> None:
        stack = self.stack
        stack and stack.pop()

    def top(self) -> int:
        stack =self.stack
        if stack :
         return stack[-1]

    def getMin(self) -> int:
        stack = self.stack
        return stack and min(stack)
        
