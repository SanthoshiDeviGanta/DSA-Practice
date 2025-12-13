// Using two Maps
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let StoT = new Map();
  let TtoS = new Map();

  for (let i = 0; i < s.length; i++) {
    let si = s[i];
    let ti = t[i];
    if (!StoT.has(si) && !TtoS.has(ti)) {
      StoT.set(si, ti);
      TtoS.set(ti, si);
    } else if (TtoS.get(ti) !== si || StoT.get(si) !== ti) {
      return false;
    }
  }
  return true;
}

//   Using set and Map
function isIsomorphic2(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let stringMap = new Map();
  let occuredSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!occuredSet.has(t[i]) && !stringMap.has(s[i])) {
      stringMap.set(s[i], t[i]);
      occuredSet.add(t[i]);
    } else if (stringMap.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
}

// Using In built functions
function isIsomorphic1(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
}

// Time : O(n*n) --> for loop --> inside again indexof means it's traversing through array again (like for loop)
// Space : O(1)

console.log(isIsomorphic("eg", "add")); //true
console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("bdsc", "baba")); //false
