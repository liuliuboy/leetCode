/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 迭代
// var isSameTree = function(p, q) {
//   if (p === null && q === null) {
//     return true;
//   }
//   if (p === null || q === null) {
//     return false;
//   }
//   let arrP = [p], arrQ = [q];

//   while (arrP.length || arrQ.length) {
//     let NP = arrP.pop();
//     let NQ = arrQ.pop();
//     if (NP.val !== NQ.val) {
//       return false;
//     }
//     if (NP.left && NQ.left) {
//       arrP.push(NP.left);
//       arrQ.push(NQ.left);
//     } else if (NP.left || NQ.left) {
//       return false;
//     }

//     if (NP.right && NQ.right) {
//       arrP.push(NP.right);
//       arrQ.push(NQ.right);
//     } else if (NP.right || NQ.right){
//       return false;
//     }
//   }
//   return arrP.length === 0 && arrQ.length === 0;
// };

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 递归
 */
// var isSameTree = function(p, q) {
//   // p\q 都同时等于 null，两树相等
//   if (p === null && q === null) {
//     return true;
//   }
//   // p\q 有一个等于 null,另一个不等于 null。不相等
//   if (p === null || q === null) {
//     return false;
//   }

//   // p/q val 不相等则不相等
//   if (p.val !== q.val) {
//     return false;
//   }

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

var isSameTree = function (p, q) {
  var recursive = (nodeP, nodeQ) => {
    if (nodeP === null && nodeQ === null) {
      return true;
    }
  
    if (nodeP === null || nodeQ === null) {
      return false;
    }

    let leftVal = recursive(nodeP.left, nodeQ.left);
    let rightVal = recursive(nodeP.right, nodeQ.right)

    if (nodeP.val === nodeQ.val && leftVal && rightVal) {
      return true;
    }
    return false;
  }
  return recursive(p, q);
}
// @lc code=end

