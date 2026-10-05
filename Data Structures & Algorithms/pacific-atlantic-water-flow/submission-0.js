class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        const rows = heights.length;
        const cols = heights[0].length;

        const pacific = new Set();
        const atlantic = new Set();

        function dfs(heights, visited, r, c) {

            // outside the grid
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols
            ) {
                return;
            }

            // already visited
            if (visited.has(`${r},${c}`)) {
                return;
            }

            visited.add(`${r},${c}`);

            const neighbours = [
                [r, c - 1],
                [r, c + 1],
                [r - 1, c],
                [r + 1, c]
            ];

            for (const [nr, nc] of neighbours) {

                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(heights, visited, nr, nc);
                }
            }
        }

        // Pacific: left column
        for (let r = 0; r < rows; r++) {
            dfs(heights, pacific, r, 0);
        }

        // Pacific: top row
        for (let c = 0; c < cols; c++) {
            dfs(heights, pacific, 0, c);
        }

        // Atlantic: right column
        for (let r = 0; r < rows; r++) {
            dfs(heights, atlantic, r, cols - 1);
        }

        // Atlantic: bottom row
        for (let c = 0; c < cols; c++) {
            dfs(heights, atlantic, rows - 1, c);
        }

        const result = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {

                const key = `${r},${c}`;

                if (
                    pacific.has(key) &&
                    atlantic.has(key)
                ) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}