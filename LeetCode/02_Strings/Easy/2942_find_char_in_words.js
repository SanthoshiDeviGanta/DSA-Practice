function findWordsContaining(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let count = words[i].length - 1;
    while (count >= 0) {
      if (words[i][count] === x) {
        result.push(i);
        break;
      }
      count--;
    }
  }

  return result;
}

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));

// console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
