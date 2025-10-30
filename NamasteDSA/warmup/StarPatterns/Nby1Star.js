function print1bynStar(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        // for(let j=n; j>=n-i; j--){
        // for(let j=0; j<i+1; j++){
        for (let j = 0; j <= i; j++) {
            row = row + '*';
        }
        console.log(row);
    }
}

print1bynStar(5)