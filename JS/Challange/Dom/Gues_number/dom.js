/*Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх */

let a = document.getElementsByTagName("li")[0];

console.log(a);

/*Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх */
let b = document.getElementsByTagName("li")[21];
console.log(b);


/*Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх */

let c = document.getElementById("aimag-315");
console.log(c);

/*Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin) */

document.querySelectorAll("body")[0].style.color="aqua";
document.querySelectorAll("ul")[0].style.backgroundColor="black";

document.querySelectorAll("body")[0].style.fontSize="20px";
document.querySelectorAll("ul")[0].style.borderStyle="solid";
document.querySelectorAll("ul")[0].style.borderRadius="20px";

