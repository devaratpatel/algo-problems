//        Array Algorithm Problems

// Problem 1 - Two Number Sum

//Solution 1 (Nested For Loop) -
// O(n^2) time | O(1) space

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
// O(n) time | O(n) space

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
// O(nlog(n)) time | O(1) space

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

// Problem 2 - Validate SubSequence

// Solution 1 - (While Loop)
// O(n) time | O(n) space

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

// Solution 2 (For Loop)
// O(n) time | O(n) space

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === currentNum) seqIdx++;
  }
  return seqIdx === sequence.length;
}

/* <--------------------------------------------> */

// Problem 3 - Sorted Sqaured Array

// Solution 1 - (Brute Force)
// O(nlogn) time | O(n) space

// function sortedSquaredArray(array) {

//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     const currentNum = array[i];
//     const squaredNum = currentNum * currentNum;
//     result.push(squaredNum);
//   }
//   return result.sort((a, b) => a - b);
// }

// Solution 2 - (Two Pointer / Absolute Values)
// O(n) time | O(n) space

function sortedSquaredArray(array) {
  // Write your code here.
  let sortedSquares = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerValue = array[left];
    let largerValue = array[right];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValue++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largerValue--;
    }
  }
  return sortedSquares;
}
