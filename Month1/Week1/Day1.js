// Date - 30th June 2025
// LeetCode Question for Today - Two Sum, Best time to Buy and Sell Stock, Contain Duplicates

// Question 1
// Create and array with 5 Students names, after that create a function which takes 2 parameters (allStudents, studentName) and iterate over all students and find that specific user "studentName".

// Solution

// // Data Structure 👇
// const allStudents = ["Nikhil", "Suyash", "Prashant", "Nishi", "Varsha"];
// const studentName = "Varsha";

// // Algorithm used for finding a specific user (Linear Search) 👇
// function findStudent(allStudents, studentName) {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log("Found", studentName);
//     }
//   }
// }

// findStudent(allStudents, studentName);


// // LeetCode Question - 1
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         // console.log(i, j);
//         return [i, j];
//       }
//     }
//   }
// };

// const nums = [2, 5, 5, 11];
// const target = 10;

// console.log(twoSum(nums, target));


// LeetCode Question - 2
// var maxProfit = function (prices) {
//   let todayProfit = 0;
//   let profit = 0;
//   let lowest = Number.MAX_VALUE;
//   for (let i = 0; i < prices.length; i++){
//     if (prices[i] < lowest) {
//       lowest = prices[i]
//     }
//     todayProfit = prices[i] - lowest
//     if (todayProfit > profit) {
//       profit = todayProfit;
//     }
//   }

//   return profit>0?profit:0
// }

// var maxProfit = function (prices) {
//   let profit = 0, lowest = Number.MAX_VALUE;
//   for (const price of prices) {
//     lowest = Math.min(lowest, price);
//     profit = Math.max(profit, price - lowest);
//   }
//   return profit;
// }

// const prices = [7, 1, 5, 3, 6, 4];

// console.log(maxProfit(prices))


// LeetCode Question - 3
