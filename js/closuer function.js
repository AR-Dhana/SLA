// let x={
//     one:1,
//     two:2,
//     three:3
// }

// if((x.one==1)&&(x.two==2)&&(x.three==3)){
//     console.log('ture');
// }
// else{
//     console.log('ture');
// }



let x = 1;
if (((x++) == 1) && ((x++) == 2) && ((x++) == 3)) {
    console.log('ture');
    console.log(x);
}
else {
    console.log('false');
}


let b = 4;
if (((--b) == 3) && ((--b) == 2) && ((--b) == 1)) {
    console.log('ture');
    console.log(b);
}
else {
    console.log('false');
}


let a = 1;
if (((a = a + 1) == 2) && ((a = a + 2) == 4) && ((a) == 4)) {
    console.log('ture');
    console.log(a);
}
else {
    console.log('false');
}



const y = (() => {
    let a = 1;
    return {
        valueOf: function () {
            return a++;
        }
    };
})();

if ((y == 1) && (y == 2) && (y == 3)) {
    console.log(y);
    console.log('true');
}
else {
    console.log('false');

}

console.log(y)




// using index
let z = 0;

function ans() {
    z = [1, 2, 3];
    if ((z[0] == 1) && (z[1] == 2) && (z[2] == 3)) {
        console.log("True");
    } else {
        console.log("False");
    }
}
ans();













let f = 1;

if ((f == 1) && (f == 2) && (f == 3)) {
    console.log('true');
}
else {
    console.log('false');

}



let g = 10;
let h = 5;
let j;
console.log(g)
console.log(h)

console.log(j)
console.log(h)
console.log(g)
