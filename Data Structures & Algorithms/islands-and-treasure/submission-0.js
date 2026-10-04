class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
    
        let queue =[];

        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c] == 0){
                    queue.push([r,c]);
                }
            }
        }
                    bfs(grid,queue);


        function bfs(grid,queue){
            while(queue.length > 0){
                let [r,c] = queue.shift();
                 let neighbours = [[r+1 ,c],
                                    [r-1,c],
                                    [r,c-1],
                                    [r,c+1]]
                for(const [nr,nc] of neighbours){
                    if(nc<0 || nr<0 || nr>grid.length-1 ||nc>grid[0].length-1){
                        continue;
                    }
                    if(grid[nr][nc] == 2147483647){
                        grid[nr][nc]=grid[r][c]+1
                        queue.push([nr,nc]);
                    }
                }
            }
        }
        return grid;
    }
}
