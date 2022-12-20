/*hacmk hiih code bichih */
//ehniii hack 

//2 too oruulna ter toon hoorondoh tegsh toog hevlene


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