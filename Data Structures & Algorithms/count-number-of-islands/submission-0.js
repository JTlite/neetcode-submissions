class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let count =0;

        for(let r=0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c] === "1"){
                    if(!visited.has(`${r},${c}`)){
                        count++
                        dfs(grid,visited,r,c);
                    }
                }
            }
        }


        function dfs(grid,visited,r,c){
            
            if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length
) {
    return;
}
if(grid[r][c] == "0"){return;}
            if(grid[r][c] == "1" && visited.has(`${r},${c}`)){
                
                return;
            }else{
                
                visited.add(`${r},${c}`);
            }
            dfs(grid,visited, r-1,c);
                dfs(grid,visited, r+1, c);
                dfs(grid,visited,r,c-1);
                dfs(grid,visited, r,c+1);
        }
        console.log(count);
        return count;
    }
}
