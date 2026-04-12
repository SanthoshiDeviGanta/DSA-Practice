var partition = function (s) {
  let result = [];

  function isPalindrome(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
      if (arr[i] !== arr[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  function backTrack(path, startIdx) {
    if (path.length > 0) {
      if (isPalindrome(path)) {
        // result.push(path.join(""));
        result.push([...path]);
      }
    }
    for (let i = startIdx; i < s.length; i++) {
      path.push(s[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack([], 0);
  return result;
};

// console.log(partition("aabaa"));
// [["a","a","b"],["aa","b"]]
console.log(partition("aab"));
