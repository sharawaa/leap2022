/*1. Prompt - оор 1 тоо авна. 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга. example: input = 1234567; digit: = 7;v */


let a = prompt("Ta durin toogoo oruulna uu");
let count = 0;


while(a!==0){
    count  = count + 1;
    a = Math.floor(a/10);
}
alert(count);