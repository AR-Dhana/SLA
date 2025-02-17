function add() {

    a = 100;
    b = "Muthu";
    c = true;
    var d;
    var e = null;

    //array
    var arr = [10, 230, 3435, 45];

    //object - Dictionary - Map - Keypair(name-key value-"Muthu")
    var obj = {
        name: "Muthu",
        age: 35,
        place: 'Chennai'
    };
    //array object
    var arrobj = [
        {
            name: "Muthu",
            age: 35,
            place: 'Chennai'
        },
        {
            name: "karthi",
            age: 53,
            place: 'Salem'
        }
    ];


    console.log(typeof (a));
    console.log(typeof (b));
    console.log(typeof (c));
    console.log(typeof (d));

    console.log(typeof (e));

    console.log(arr[0]);
    console.log(obj.name);
    console.log(arrobj[1].name);
}

//call the function 
add();
//regular function-method
function common(a, b) {

    const c = a + b;
    return c;
}
function three(a, b, c) {

    const d = a + b + c;
    return d;
}
//procedure -method
function muthu(a, b) {

    const c = a + b;
    console.log("Muthu Samosa" + c);
}


let res = three(10, 300, 90);
console.log("A2B Samosa" + res);



let ress = common(10, 300);
console.log("Samosa" + ress);
muthu(20, 23);