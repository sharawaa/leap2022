// let num = 100;
// let count = 0;
// while(num > 0){
//     if (num % 3 == 0){
//         count++;
//     }
// console.log(count)}

let x = 10; 
let count = 1;
let output = "";

while (x > 0) {
    
    while(y > 0){
        output = output + count + "\t";
        if (count % 15 == 0) output += "\n";  /*output = output + "\n" */
        y--;
        count++;
    }
    ;
}
console.log(output);

for(let y = 10; x--;){
    console.log()
}