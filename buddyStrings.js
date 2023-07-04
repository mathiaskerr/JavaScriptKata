// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, console.log(false).

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.


//  @param {string} s
//  @param {string} goal
//  @return {boolean}


// my attempt is checking each char from s swapped into every position of goal so the times running is to the power of 2 so for long string takes too long

// var buddyStrings = function(s, goal) {
//     let result = false;
//     let newS= s.split("");
   

 
//     for(let i = 0 ; i < s.length; i ++){
//         temp = newS[i]
//         for(let j = 0 ; j < s.length -1 ; j ++){
//             if(i != j){
//             newS[i] = newS[j]
//             newS[j] = temp
           
      
//             newS.join("") === goal ? result = true : result = false ;  
//             if (result === true) {
//                 console.log(result)
//                 return result};
//             newS = s.split("")
//             }
//         }
//     }
//     console.log(result);
//     return result
// };





var buddyStrings = function(s, goal) {
    if (
        s.length !== goal.length ||
        s.length === 1 ||
        goal.length === 1
    ) {
        console.log(false);
    }

    if (s === goal) {
        const setData = new Set(s);
        console.log( setData.size < s.length);
        return;
    }
    // The code snippet you provided checks whether a variable s is equal to a variable goal. If they are equal,
//      it creates a new Set object called setData using the elements of s, and then checks if the size of setData is less than the length of s.
//       Finally, it logs the result to the console and returns.

// In summary, the code checks if the elements of s are unique by comparing the size of the Set created from s with the length of s. If the size is less than the length,
//  it implies that there are duplicate elements in s.

    const diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    if (
        diff.length === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]]
    ) {
        console.log(true);
        return;
    }

    console.log(false);
    return;
};
buddyStrings("aaab","aaab")

// this solution compares the differences between to two strings by creating an array of the differences
//  (along side checking its the same, not sure how it solves it if the char are all the same though) 
// if the difference is a length of two and the are the same char its can be swapped