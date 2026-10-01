class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let count = 0;
        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(!visited.has(`${r},${c}`) && grid[r][c] == "1"){
                    count++;
                    dfs(grid,count,r,c);

                }
            }
        }

        function dfs(grid, count,r,c){
            if(r <0 || c<0 || r>grid.length-1 || c > grid[0].length-1){
                return;
            }
            if(grid[r][c] == "0"){
                return;
            }
            if(visited.has(`${r},${c}`)){
                return;
            }

            if(grid[r][c] == "1" && !visited.has(`${r},${c}`)){
                visited.add(`${r},${c}`);
                dfs(grid, count,r-1,c);
                dfs(grid,count, r+1,c);
                dfs(grid,count, r,c-1);
                dfs(grid,count,r,c+1);
            }
        }

        return count;
    }
}
