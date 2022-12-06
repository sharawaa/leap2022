/* Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Гончигсумлай өөртөө зориулан нийт төлбөр буцаадаг function бичжээ. Эдгээр тохиолдолуудад тус бүр хэдийг төлөхийг function - оор олно уу? 3000₮, 27500₮, 100000₮. */
let num1 = 3000;
let num2 = 27500;
let num3 = 100000;




// let number2 = parseFloat(prompt("enter second number:"))

/*1. Нийт төлбөр ийг олдог 1 function. */
// function myFunction (num1, num2, num3){
//     return num1+num2+num3
// }
// let result = myFunction(num1, num2, num3);
// console.log(result+" undsen tulbur")

// // 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.
// function myFunction1 (num1){
//     return ((num1*2)/100)
// }
// let result1 = myFunction1(num1)
// console.log(result1+" nemegdel")

// function myFunction2 (num2){
//     return ((num2*1.5)/100)
// }
// let result2 = myFunction2(num2)
// console.log(result2+ " nemgdel")

// function myFunction3 (num3){
//     return ((num3*2)/100)
// }
// let result3 = myFunction3(num3)
// console.log(result3+ " nemegdel tulbur");

// console.log(result1+result2+result3+ "niit tulbur")

// function myFunction (too1,too2, too3){
//   return too1+too2+too3
// }
//  let result = myFunction(1,2,3);
// console.log(result);


function tip (num1, num2, num3){
if(num1 > 5000 && num1 < 3000){
   return (num1 *0.15)}
    else {
        return(num1*0.2)
    }
    console.log(num1)
}

