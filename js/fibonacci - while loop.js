function fibo(input) {
    let number = input;
    // console.log(number);
    let init = 0;
    let result = '';
    let swap;
    while (number > 0) {
        // console.log(init);
        if (init == 0) {
            result = result + (init.toString()) + ', ';
            swap = init;
            init++;
            // console.log(result);
        }
        else if ((init == 1) && (result.length <= 4)) {
            // console.log(result.length);
            result = result + (init.toString()) + ', ';
            // console.log(result);
        }
        else {
            init = swap + (swap = init);
            result = result + (init.toString()) + ', ';
            // console.log(result);
        }
        number--;
    }
    // console.log(result);
    return result;
}
console.log(fibo(10));






// execution workout
`
init	swap    init = swap + (swap = init);
------------------------------------------------
1	    0	    init = 0 + (swap = 1); → init = 1
1	    1	    init = 1 + (swap = 1); → init = 2
2	    1	    init = 1 + (swap = 2); → init = 3
3	    2	    init = 2 + (swap = 3); → init = 5
`
