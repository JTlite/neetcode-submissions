class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let maxArea =0;
        let area = 0;

        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                area = 0;
                if(!visited.has(`${r},${c}`) && grid[r][c] == "1"){
                   area = dfs(grid,area,r,c);
                   console.log(area);
                   maxArea = Math.max(area,maxArea); 
                }
            }
        }
        function dfs(grid,area,r,c){
            if(r < 0 || c<0 || r >grid.length-1 || c > grid[0].length-1){
                return area;
            }
            if(grid[r][c] == "0"){
                return area;
            }
            if(visited.has(`${r},${c}`)){
                return area;
            }
            if(!visited.has(`${r},${c}`) && grid[r][c] == "1"){
                
                visited.add(`${r},${c}`);}
                const up =dfs(grid,area,r-1,c);
                const down = dfs(grid,area,r+1,c);
                const right = dfs(grid,area,r,c+1);
                const left = dfs(grid,area,r,c-1);
            
            return 1+up+down+left+right;
        }
        return maxArea;

    }
}
