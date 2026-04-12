function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            let arrI = arr[i];
            let arrJ = arr[j];
            [arrI, arrJ] = [arrJ, arrI];
            i++;
        }
        console.log('arr', j, '----', arr);

    }

    [arr[i], pivot] = [pivot, arr[i]];
    return i;
}

console.log(quickSort([5, 2, 3, 1, 8, 7]));