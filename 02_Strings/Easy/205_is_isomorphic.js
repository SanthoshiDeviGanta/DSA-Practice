function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let stringMap = new Map();
  let occuredSet = new Set();
  let i = 0;
  while (i <= s.length) {
    // if (!stringMap.has(s[i])) {
    //   stringMap.set(s[i], t[i]);
    //   occuredSet.add(t[i]);
    // } else if (!(stringMap.get(s[i]) === t[i]) || occuredSet.has(t[i])) {
    //   return false;
    // }
    if (!stringMap.has(s[i])) {
      stringMap.set(s[i], t[i]);
      if (occuredSet.has(t[i])) {
        return false;
      }
      occuredSet.add(t[i]);
    } else if (!(stringMap.get(s[i]) === t[i])) {
      return false;
    }
    // console.log("occuredSet", occuredSet);

    i++;
  }
  return true;
}

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("bdsc", "baba")); //false
