
function merge_sorted_array(list1, list2) {
    let i = 0;
    let j = 0;
    let newArray = [];
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            newArray.push(list1[i]);
            i++;
        } else {
            newArray.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        newArray.push(list1[i]);
        i++;
    }
    while (j < list2.length) {
        newArray.push(list2[j]);
        j++;
    }
    return newArray;
}


let list1 = [1, 3, 5, 7]
let list2 = [2, 4, 6, 8]

console.log(merge_sorted_array(list1, list2));
