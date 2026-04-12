function print1byNAscNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            // row = row + `${j + 1}`;
            row = row + (j + 1);
        }
        console.log(row);
    }
}

print1byNAscNumbers(5);

// Output:
// 1
// 12
// 123
// 1234
// 12345























