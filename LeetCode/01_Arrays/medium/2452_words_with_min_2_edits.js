var twoEditWords = function (queries, dictionary) {
  let final = [];
  function isInTwoEdits(w1, w2) {
    console.log("w1, w2", w1, w2);
    let count = 0;
    for (let i = 0, j = 0; i < w1.length; i++, j++) {
      if (w1[i] != w2[j]) {
        count++;
      }
      if (count > 2) {
        return false;
      }
    }

    return true;
  }

  for (let query of queries) {
    for (let dict of dictionary) {
      if (query.length !== dict.length) {
        break;
      }

      if (isInTwoEdits(query, dict)) {
        final.push(query);
        break;
      }
    }
  }

  return final;
};

console.log(
  twoEditWords(["word", "note", "ants", "wood"], ["wood", "joke", "moat"]),
);
