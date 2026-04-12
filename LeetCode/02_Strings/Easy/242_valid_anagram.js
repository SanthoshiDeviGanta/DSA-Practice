function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let letters = new Map();

  for (let char of s) {
    letters.set(char, (letters.get(char) || 0) + 1);
  }
  //   console.log("letters 11 ---", letters);
  for (let char of t) {
    if (!letters.has(char)) {
      return false;
    }
    letters.set(char, letters.get(char) - 1);
    // console.log("letters 22--- ", letters);
    if (letters.get(char) < 0) return false;
  }

  return true;
}

// Using in built functions

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");

//   return s === t;
// }

//  This is correct, but  if 't' has an extra character that does not appear in s,
// you already know the answer should be false., so why to do extra calculation ad logic ?
// function isAnagram(s, t) {
//   let letters = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (letters.has(s[i])) {
//       letters.set(s[i], letters.get(s[i]) + 1);
//     } else {
//       letters.set(s[i], 1);
//     }
//   }
//   console.log("letters", letters);
//   for (let i = 0; i < t.length; i++) {
//     if (letters.has(t[i])) {
//       letters.set(t[i], letters.get(t[i]) - 1);
//     } else {
//       return false;
//     }
//   }
//   console.log("letters", letters);
//   for (const value of letters.values()) {
//     if (value !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

console.log('"anagram", "nagaram"', isAnagram("anagram", "nagaram"));
console.log('"rat", "car"', isAnagram("rat", "car"));
console.log('"a", "abb"', isAnagram("a", "abb"));
