/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let num = 0, nr = grid.length, nc = grid[0].length;
  for (let i = 0; i < nr; i++) {
    for (let k = 0; k < nc; k++) {
      if (grid[i][k] === '1') {
        num++;
        deff(grid, i, k);
      }
    }
  }
  return num;
};

function deff (root, x, y) {
  if (x < 0 || x >= root.length || y < 0 || y >= root[0].length || root[x][y] === '0') {
    return;
  }
  root[x][y] = '0';
  deff(root, x, y + 1);
  deff(root, x, y - 1);
  deff(root, x - 1, y);
  deff(root, x + 1, y);
}
// @lc code=end

