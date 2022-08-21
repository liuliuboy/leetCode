//给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
// 示例 2：
//
//
//输入：nums = [0,1]
//输出：[[0,1],[1,0]]
//
//
// 示例 3：
//
//
//输入：nums = [1]
//输出：[[1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
//
//
// Related Topics 数组 回溯 👍 2170 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function permute(nums: number[]): number[][] {
    let list:number[] = [];
    return backtrack(list, [], nums);
};

/**
 * @param list 返回的数据
 * @param temp 缓存当前存储的数字
 * @param nums 当前的数组
 */
function backtrack(list:number[], temp:number[], nums:number[]) {
    // 终止条件
    if(temp.length === nums.length) {
        return list.push([...temp]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue;
        }
        // 放入元素
        temp.push(nums[i]);
        // 递归继续放入数字
        backtrack(list, temp, nums);
        // 清除放入里面的元素
        temp.pop();
    }
}
//leetcode submit region end(Prohibit modification and deletion)
