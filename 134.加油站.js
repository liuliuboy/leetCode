/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalCas = 0; // 总油量
    let totalCost = 0; // 总消耗
    let currentGas = 0; // 当前油量
    let startingPoint = 0; // 起始点
    for (let i = 0; i < gas.length; i++) {
        totalCas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i]; // 当前油量
        // 如果当前油量小于0，说明从起始点到i点无法到达
        if (currentGas < 0) {
            startingPoint = i + 1; // 从下一个点开始
            currentGas = 0; // 重置当前油量
        }
    }
    return totalCas < totalCost ? -1 : startingPoint; // 如果总油量小于总消耗，返回-1
};
// @lc code=end

