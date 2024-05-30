/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

xample 1:

Input: grid = [
  ["c","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
counter = 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let IslandCounter = 0;
    function dfs(grid, rowIndex, colIndex){
        if(rowIndex < 0 || rowIndex >= grid.length  || colIndex < 0 || colIndex >= grid[rowIndex].length || grid[rowIndex][colIndex] === "0"  ){
            return 0;
        }
        grid[rowIndex][colIndex] = "0";
        dfs(grid, rowIndex -1, colIndex);
        dfs(grid, rowIndex +1, colIndex);
        dfs(grid, rowIndex, colIndex -1);
        dfs(grid, rowIndex, colIndex +1);

        return 1;
    }
    for(let rowIndex = 0; rowIndex < grid.length ; rowIndex ++){
   
        for(let colIndex = 0; colIndex < grid[rowIndex].length; colIndex ++){
           
            if(grid[rowIndex][colIndex] === "1"){
                IslandCounter += dfs(grid, rowIndex, colIndex);
            }
          
       
        }
    }

   
    console.log(IslandCounter);
   
    
};

numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]);