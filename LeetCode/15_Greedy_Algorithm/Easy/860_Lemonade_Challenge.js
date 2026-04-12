/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function (bills) {
//   let billsMap = new Map();

//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] === 5) {
//       billsMap.set(5, (billsMap.get(5) || 0) + 1);
//     } else if (bills[i] === 10) {
//       if (billsMap.get(5) > 0) {
//         billsMap.set(5, billsMap.get(5) - 1);
//         billsMap.set(10, (billsMap.get(10) || 0) + 1);
//       } else {
//         return false;
//       }
//     } else if (bills[i] === 20) {
//       if (billsMap.get(10) > 0) {
//         billsMap.set(10, billsMap.get(10) - 1);
//         billsMap.set(20, (billsMap.get(20) || 0) + 1);
//         if (billsMap.get(5) > 0) {
//           billsMap.set(5, billsMap.get(5) - 1);
//         } else {
//           return false;
//         }
//       } else if (billsMap.get(5) >= 3) {
//         billsMap.set(5, billsMap.get(5) - 3);
//         billsMap.set(20, (billsMap.get(20) || 0) + 1);
//       } else {
//         return false;
//       }
//     }
//   }

//   //   console.log(billsMap);

//   return true;
// };

var lemonadeChange = function (bills) {
  let fives = 0;
  let tens = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fives++;
    }
    // 10
    else if (bills[i] === 10) {
      if (fives > 0) {
        fives--;
        tens++;
      } else {
        return false;
      }
    }
    // 20
    else if (bills[i] === 20) {
      if (tens > 0) {
        tens--;
        if (fives > 0) {
          fives--;
        } else {
          return false;
        }
      } else if (fives >= 3) {
        fives = fives - 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

// console.log(lemonadeChange([5, 5, 10, 10, 20]));
// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
