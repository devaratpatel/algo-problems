//        Array Algorithm Problems

// Problem 1 - Two Number Sum

//Solution 1 (Nested For Loop) -
// 0(n^2) time | 0(1) space

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   for (let i = 0; i < array.length; i++) {
//     let firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }

//Solution 2 (Hash Map)
// 0(n) time | 0(n) space

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const nums = {};
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    const potentialMatch = targetSum - currentNum;
    if (potentialMatch in nums) {
      return [potentialMatch, currentNum];
    } else {
      nums[currentNum] = true;
    }
  }
  return [];
}

//Solution 3 (Two-Pointer)
// 0(nlog(n)) time | 0(1) space

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     const currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//       left++;
//     } else if (currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// }

/* <--------------------------------------------> */

// Problem 2 - Validate Sequence

// Solution 1

// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }

// Solution 2

// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//   let seqIdx = 0;
//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     if (seqIdx === sequence.length) break;
//     if (sequence[seqIdx] === currentNum) seqIdx++;
//   }
//   return seqIdx === sequence.length;
// }

// Solution 3

function isValidSubsequence(arr, sequence) {
  // Write your code here.
  let seqIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === arr[i]) seqIdx++;
  }
  return seqIdx === sequence.length;
}

/* <--------------------------------------------> */
