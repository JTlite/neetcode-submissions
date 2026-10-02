class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let maxArea = 0;
        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c] == "1" && !visited.has(`${r},${c}`)){
                  let area = dfs(grid,r,c);
                  console.log(area);
                  maxArea = Math.max(area,maxArea);
                }
            }
        }

        function dfs(grid,r,c){
            if(r<0 || c<0 || r>grid.length-1 || c>grid[0].length-1){
                return 0;
            }
            if(grid[r][c] == "0" ){
                return 0;
            }
            if(visited.has(`${r},${c}`)){
                return 0;
            }
            if(grid[r][c] == "1" && !visited.has(`${r},${c}`)){
                visited.add(`${r},${c}`);  
            }
            const up = dfs(grid,r-1,c);
            const down =dfs(grid,r+1,c);
            const right =dfs(grid,r,c+1);
            const left =dfs(grid,r,c-1);
            return 1+up+down+right+left;
        }
        return maxArea;
    }
}
