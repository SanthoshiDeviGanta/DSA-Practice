function removeSpaces(s) {
  // code here
  let x = 0;
  let splitted = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (splitted[i] != " ") {
      if (i != x) {
        [splitted[i], splitted[x]] = [splitted[x], splitted[i]];
      }
      x++;
    }
  }

  return splitted.join("");
}

console.log(removeSpaces("g eeks for ge eeks"));

console.log(removeSpaces("abc d "));
