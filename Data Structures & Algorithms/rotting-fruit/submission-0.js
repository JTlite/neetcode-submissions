class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c] == 2){
                    queue.push([r,c])
                }
            }
        }
        bfs(grid,queue);
        
        function bfs(grid,queue){
            while(queue.length>0){
                const [r,c] = queue.shift();
                let neighbours = [[r+1,c],[r-1,c],[r,c-1],[r,c+1]]
                for(const [nr,nc] of neighbours){
                    if(nr<0 || nc<0||nr>=grid.length||nc>=grid[0].length){
                        continue;
                    }
                    if(grid[nr][nc] == 1){
                    grid[nr][nc]=grid[r][c]+1;
                    queue.push([nr,nc]);
                    }
                }
        
            }
        }
        let max = 2;

for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {

        if (grid[r][c] === 1) {
            return -1;
        }

        max = Math.max(max, grid[r][c]);
    }
}

return max - 2;
       // return max;

    }
}
