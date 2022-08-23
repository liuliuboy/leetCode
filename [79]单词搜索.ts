//给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例 1：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCCED"
//输出：true
//
//
// 示例 2：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"SEE"
//输出：true
//
//
// 示例 3：
//
//
//输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
//"ABCB"
//输出：false
//
//
//
//
// 提示：
//
//
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
//
//
//
//
// 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
//
// Related Topics 数组 回溯 矩阵 👍 1412 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function exist(board: any[][], word: string): boolean {
    if (!board.length) {
        return false;
    }
    if (word.length === 0) {
        return true;
    }
    const row = board.length; // 行
    const col = board[0].length; // 列
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let ret = find(i, j, 0);
            if (ret) {
                return true;
            }
        }
    }
    return false;
    // find 查找下一步
    function find(i:number, j:number, cur:number):boolean{
        // 判断是否越界
        if (i >= row || i < 0) {
            return false;
        }
        if (j >= col || j < 0) {
            return false;
        }
        const letter = board[i][j]; // 当前的数
        // 当前字母不相等
        if (letter !== word[cur]) {
            return false;
        }
        //
        if (cur === word.length - 1) {
            return true;
        }
        // 终止条件
        board[i][j] = null; // 当前路径标记为 null
        const ret:boolean = find(i + 1, j, cur + 1) || find(i - 1, j, cur + 1) || find(i, j + 1, cur + 1) || find(i, j - 1, cur + 1);
        board[i][j] = letter;
        return ret;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
