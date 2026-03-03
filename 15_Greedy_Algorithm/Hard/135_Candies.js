// Two Pass filling
// var candy = function (ratings) {
//   let candies = new Array(ratings.length).fill(1);

//   console.log("candies", candies);

//   //   Left Filling
//   for (let i = 1; i < ratings.length; i++) {
//     if (ratings[i] > ratings[i - 1]) {
//       candies[i] = candies[i - 1] + 1;
//     }
//   }
//   console.log("candies", candies);
//   //   Right Filling
//   for (let i = ratings.length - 1; i > 0; i--) {
//     if (ratings[i] < ratings[i - 1]) {
//       candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
//     }
//   }

//   console.log("candies", candies);

//   return candies.reduce((sum, acc) => sum + acc, 0);
// };

// console.log(candy([1, 2, 8, 8, 2, 1]));

// One pass

var candy = function (ratings) {
  let rLen = ratings.length;
  let candies = rLen;
  let i = 1;

  while (i < rLen) {
    if (ratings[i - 1] === ratings[i]) {
      i++;
      continue;
    }

    let up = 0;
    while (i < rLen && ratings[i - 1] < ratings[i]) {
      i++;
      up++;
      candies = candies + up;
    }

    let down = 0;
    while (i < rLen && ratings[i - 1] > ratings[i]) {
      i++;
      down++;
      candies = candies + down;
    }

    candies = candies - Math.min(up, down);
  }

  return candies;
};

console.log(candy([1, 3, 3, 4, 5, 4, 2]));
