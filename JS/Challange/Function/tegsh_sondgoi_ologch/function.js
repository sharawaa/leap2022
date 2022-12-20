/*1. 2 тоон утга авдаг 2 function үүсгэ.
2. 2 авсан тоон утгын хоорондох тэгш тоонуудын array буцаадаг 1 function.
2. 2 авсан тоон утгын хоорондох сондгой тоонуудын array буцаадаг 1 function. */


let num1 = 20;
let num2 = 60;
let output = [];

even(num1,num2)
function even(a, b) {
    let j = 0;
    for (let i = a; a <= b; i++) {
        if (i % 2 == 0) {
            output[j] = i;
            j++
        }

    }
    return output
}
 console.log(output);