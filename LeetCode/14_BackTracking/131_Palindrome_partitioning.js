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

var partition = function (s) {
  let result = [];

  function backTrack(path, remainingStr) {
    if (remainingStr === "") {
      result.push([...path]);
    }

    for (let i = 1; i <= remainingStr.length; i++) {
      let choice = remainingStr.substring(0, i);
      if (!isPalindrome(choice)) continue;

      path.push(choice);
      backTrack(path, remainingStr.substring(i));
      path.pop();
    }
  }
  backTrack([], s);
  return result;
};

// console.log(partition("aabaa"));
// [["a","a","b"],["aa","b"]]
console.log(partition("aab"));
