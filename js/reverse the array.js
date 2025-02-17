function swapWithout() {
    let arr = [10, 20, 30, 40, 50, 60, 30, 77, 81, 9];

    for (i = 0; i <= arr.length; i++) {
        console.log(i)
        for (j = i; j <= arr.length; j++) {
            console.log(j)
            if (arr[i] < arr[j]) {
                let c;
                c = arr[i];
                arr[i] = arr[j];
                arr[j] = c
            }
        }
    }
    return arr;
}

console.log(swapWithout());