/*while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох. */
let x = parseFloat(prompt("toogoo oruuna uu"));
let output = "";
while (x > 0) {
    if (x % 2 == 0){
    output = output + x + " "; //10 8 6 4 2 
    }
    x--;
}
alert(output)