1. 回溯公式
```
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
    backtrach(list)
```
2. （回溯）不需要返回全部路径，返回 true 和 false
