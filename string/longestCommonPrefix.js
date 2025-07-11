// Longest common prefix

// https://leetcode.com/problems/longest-common-prefix/
// easy
// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""

// O(n * m)
function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); //'fl'
