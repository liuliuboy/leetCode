/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let base = image[sr][sc];
  if (base === color) {
    return image;
  }
  
  const isDeep = (x, y) => {
    if (x < 0 || x >= image.length || y < 0 || y > image[x].length || image[x][y] !== base) {
      return;
    }
    image[x][y] = color;
    isDeep(x + 1, y);
    isDeep(x - 1, y);
    isDeep(x, y + 1 );
    isDeep(x, y - 1);
  }
  isDeep(sr, sc);
  return image;
};
// @lc code=end

