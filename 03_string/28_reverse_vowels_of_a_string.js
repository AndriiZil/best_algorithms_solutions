'use strict';

/**
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "hello"
 * Output: "holle"
 * Example 2:
 *
 * Input: s = "leetcode"
 * Output: "leotcede"
 */

const reverseVowels = function (s) {
  const vowels = ['a', 'o', 'u', 'e', 'i'];
  const vowelsIndexes = [];
  const pickedVowels = [];
  const originalStringArray = s.split('');

  originalStringArray.forEach((char, index) => {
    if (vowels.includes(char.toLowerCase())) {
      vowelsIndexes.push(index);
      pickedVowels.push(char);
    }
  });

  pickedVowels.reverse().forEach((char, index) => {
    const elementIndex = vowelsIndexes[index];

    originalStringArray[elementIndex] = char;
  });

  return originalStringArray.join('');
};

console.log(reverseVowels('hello')); // holle
console.log(reverseVowels('leetcode')); // leotcede
console.log(reverseVowels('aA')); // Aa
