let arrList = [1, 7, 4, 3, 0, 9, 2, 5, 8, 6];
// let arrList = [2,1,5,3,4,7,6];

/**
 * 冒泡排序
 */
function bubbleSort(arr) {
    let len = arr.length - 1;
    for (let j = 0; j < len; j++) {
        // 排队每个人与右边的人比较，个子高的向右移动,
        // 为啥 len - j, 因为后面的人已经排好，只需要排前面的同学就好
        for (let i = 0; i < len - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    return arr;
}

/**
 * 快速排序
 * 在数组中取一个标志位，与其他元素进行比较，大的放在右边，小的放在左边
 */
function quickSort(arr) {
    // 当数组中小于 2 就无法再进行比较
    if (arr.length < 2) {
        return arr;
    }
    let flag = arr[0]; // 这里一定要取第一个么?
    let right = [], left = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > flag) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    // 进行递归二分排序
    return quickSort(left).concat(flag, quickSort(right));
}

/**
 * 原地快排
 */
function quick(arr, start, end) {
    let init = start;
    let flag = arr[init];
    start++
    while (start <= end) {
        while (arr[end] > flag) {
            end--
        }

        while (arr[start] < flag) {
            start++
        }

        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    [arr[init], arr[start-1]] = [arr[start-1], arr[init]];
    return start;
}


function quickSortPlus(arr, start, end) {
    if (start < end) {
        let index = quick(arr, start, end);
        quickSortPlus(arr, start, index-1);
        quickSortPlus(arr, index, end);
    }
    return arr;
}

console.log('原地快排', quickSortPlus(arrList, 0, arrList[arrList.length - 1]));
