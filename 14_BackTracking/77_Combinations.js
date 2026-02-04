function combine(n, k) {
  let result = [];
  function backTrack(path, startIdx) {
    // console.log(path);
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = startIdx; i < n + 1; i++) {
      path.push(i);
      backTrack(path, i + 1);
      path.pop();
    }
  }
  backTrack([], 1);

  return result;
}

console.log(combine(4, 2));
