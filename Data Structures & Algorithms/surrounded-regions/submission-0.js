class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const visited = new Set();
        for(let r=0;r<board.length;r++){
            for(let c=0;c<board[0].length;c++){
                if((c== 0 || r== 0|| r==board.length-1 || c== board[0].length-1  ) && !visited.has(`${r},${c}`) && board[r][c]=="O"){
                    board[r][c] = "*"
                    dfs(board, visited, r,c);
                }
            }
        }

        function dfs(board, visited, r,c){
            if(r<0 || c<0 ||r>board.length-1 || c>board[0].length-1){
                return;
            }
            if(!visited.has(`${r},${c}`)){
                visited.add(`${r},${c}`);
                const neighbours =[[r+1,c],[r-1,c],[r,c+1],[r,c-1]];
                for(const [nr,nc] of neighbours){
                    if(nr >= 0 &&
                        nc >= 0 &&
                        nr < board.length &&
                        nc < board[0].length &&board[nr][nc] == "O"){
                        board[nr][nc] = "*";
                        dfs(board, visited,nr,nc); 
                    }
                }
            }
        }
        
        for(let r=0;r<board.length;r++){
            for(let c=0;c<board[0].length;c++){
                if(board[r][c] =="O"){
                    board[r][c] = "X"
                }
            }
        }
        for(let r=0;r<board.length;r++){
            for(let c=0;c<board[0].length;c++){
                if(board[r][c] =="*"){
                    board[r][c] = "O"
                }
            }
        }

        return board;
    }
}
