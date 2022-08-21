//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 5089 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function threeSum(nums: number[]): number[][] {
    if (!nums.length || nums.length < 3) {
        return [];
    }
    let list:number[][] = [], len:number = nums.length;
    nums.stor((a:number, b:number) => a - b);
    for (let i = 0; i < len; i++) {
        // 当前 tag 值与它前一个 tag 值相同跳过这次循环
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let left:number = i + 1, right:number = nums[len - 1];
        while (left < right) {
            // right 指针等于 当前 tag 下标，右指针向左移
            if (right === i) {
                right--;
            } else if (nums[left] + nums[right] + nums[i] === 0) {
                list.push(nums[left], nums[right] , nums[i]);
                // 继续移动指针查找
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                // 数字相加大于 0 右指针向左移
                right--;
            } else {
                // 数字相加小于 0 左指针向右移
                left++;
            }
        }
    }
    return list;
};
//leetcode submit region end(Prohibit modification and deletion)
