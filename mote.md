回溯
let list = [];
funciton backtrach(list, temp:临时路径，输入) {
    终止条件：
        if 临时路径与list相同
            list 里面放入一个 temp
    
    循环 {
        temp 中放入一个数据
        递归 backtrach(list, temp, 输入)
        撤销 temp 中放入的数据
    }
}

## 贪心算法
每一步选择都选择当前最优解，跟之前选择没有关系
1. 找零钱
   1. 100，50，20，10，5, 1 (无限)
   2. 每一次都按能找到最大的值 最终能够得出全局最后的解 （没有反例）

## 动态规划 （递推公式）
1. dp 数组及下标的含义
2. 递推公式
3. dp 数组初始化
4. dp 数组遍历顺序
5. 打印 dp 数组

2. 菲波那切数列
    [0,1,1,2,3,5,8,13,....]
    
