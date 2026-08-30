class MinStack {
    constructor() {
        this.stack = [];
        this.minst = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minst.length == 0 || (this.minst.length > 0 && this.minst[this.minst.length-1] >= val)){
            this.minst.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length >0){
            if(this.minst.length >0 && this.stack[this.stack.length-1] == this.minst[this.minst.length-1]){
                this.minst.pop();
            }
            return this.stack.pop();;
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length >0){
            return this.stack[this.stack.length-1];
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.minst.length >0){
            return this.minst[this.minst.length-1];
        }
    }
}
