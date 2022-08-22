//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,1,2]
//输出：
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
//
//
// 示例 2：
//
//
//输入：nums = [1,2,3]
//输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10
//
//
// Related Topics 数组 回溯 👍 1167 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function permuteUnique(nums: number[]): number[][] {
    let list:number[][] = [];
    list = backTrack(list, [], nums);
    return list;
}

function backTrack(list:number[][], temp:number[], nums:number[]) {
    // 终止条件
    if (temp.length === nums.length) {
        return list.push([...temp]);
    }
    // 循环
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue;
        }
        temp.push(nums[i]);
        backTrack(list, temp, nums);
        temp.pop();
    }
}

//leetcode submit region end(Prohibit modification and deletion)
