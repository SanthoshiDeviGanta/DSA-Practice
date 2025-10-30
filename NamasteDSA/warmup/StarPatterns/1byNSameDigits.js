function print1byNSameNumbers(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            // row = row + `${i + 1}`;
            row = row + (i + 1);
        }
        console.log(row);
    }

}
print1byNSameNumbers(5);