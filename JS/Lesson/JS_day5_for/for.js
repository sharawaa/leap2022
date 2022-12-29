// let output = " ";
// for(let row = 1; row<10; row++){
// for(let col= 1; col<10; col++){
//     output =output + col + " ";
// }
// output= output+"\n";
// debugger;
// }
// console.log(output);


// let n = 4;
// let output = "";
// for(let row = 1; row<= n; row++){
// for(let col= 1; col<= n; col++);

// if(row==1 || row || n || col == 1 || col || n){

// output= output+"*";
// }
// else{
//     output = output + " ";

// }
// debugger;
// }
// console.log(output);


let output = "";
let n = 5;
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == 1 || row == n || col == 1 || col == n) {
      output = output + "*";
    } else {
      output = output + " ";
    }
    debugger;
  }
  output = output + "\n";
}

 console.log(output);

/*suuleesee 3 dahi ornii uerduur '_'  iim zuil hiiy jn '123_456_789' */
// let number = "1234567";

// console.log(number.charAt(number.length-3));
// console.log(number.substring(1,3));
// number =
// number.substring(0, number.length-3) + "_" + number.substring(number.length-3, number.length); 
// console.log(number);

/*pomt deer hereglegchees too pasport avna tuunii zuv boltol dahin dahin shalgana  */

// let pass="123";
// let input;
// while( input !== pass ){ 
//     x = prompt("ta nuuts ugee oruulna uu; ")

// }
// alert("zuv baina");



// let number;
// while(true){
//     number= prompt("enter phone number");
//     let firstcChar = number.charAt(0);
//     number = Number(number);
//     if (Number.isInteger(number)&& (firstcChar == "9" || firstcChar == "8")){
//         break
//     }
// }
// alert("zuv baina");

// let i = 0;
// while(i < 10){
//     i++;
//     if(i%2 == 0){
//         continue;
//     }
// }
// console.log(i);