// function URLify(s) {
//   // code here
//   return s.replaceAll(" ", "%20");
// }

//  here concatentainf of string creates new string every time
function URLify1(s) {
  // code here
  let newWord = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      newWord += "%20";
    } else {
      newWord += s[i];
    }
  }

  return newWord;
}

function URLify(s) {
  // code here
  let newWord = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      newWord.push("%20");
    } else {
      newWord.push(s[i]);
    }
  }

  return newWord.join("");
}

console.log(URLify("i love programming"));
