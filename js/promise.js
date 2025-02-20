const result = new Promise((resolve, reject) => {
    let x = 1;

    if (x == 1) {
        setTimeout(function () {
            resolve('Promise resolved')
        }, 500);


    }
    else {
        reject("Failed");
    }
})

// result.then(res=>console.log(res)).catch(err=>console.log(err))


async function test() {
    try {
        let prom = await result;

        console.log(prom);
        console.log("Hello Async Function");

    }
    catch (err) {
        console.log(err);
    }

}

test();