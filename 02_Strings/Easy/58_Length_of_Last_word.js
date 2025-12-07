// function lengthOfLastWord(sentence) {
//   let splitted = sentence.trim().split(" ");
//   return splitted[splitted.length - 1].length;
// }

// function lengthOfLastWord(sentence) {
//   let count = sentence.length - 1;
//   let length = 0;
//   //   console.log("count --- 1 ----", count);
//   // Trim last spaces
//   while (count >= 0) {
//     if (sentence[count] === " ") {
//       count--;
//     } else {
//       break;
//     }
//   }
//   //   console.log("count --- 2 ----", count);
//   // Count length of last word
//   while (count >= 0) {
//     if (sentence[count] != " ") {
//       length++;
//     } else {
//       break;
//     }
//     count--;
//   }

//   return length;
// }

function lengthOfLastWord(sentence) {
  let length = sentence.length - 1;
  let count = 0;
  while (length >= 0) {
    if (sentence[length] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    // if (count > 0 && sentence[length] === " ") {
    //     break;
    // }
    length--;
  }

  return count;
}
console.log(lengthOfLastWord("a b cc "));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
