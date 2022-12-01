/* Garaas ognoo, sar, ödör gesen utguudyg avan daraah formatyn daguu haruulna uu. Zhishee 2009, 12, 31 gezh orzh irvel “2009-12-31”. Ankhaarakh zuyl khervee өdөr, sar neg orontoy baival 2 orontoi bolgokh buyu sar n 1 gezh baival “01” bolgokh, garaas oruulzh baigaa utgyg shalgakh*/

// let ognoo = prompt("он, сар, өдөр");


// let year = ognoo.substring(0, ognoo.indexOf(","));

// ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

// let month = ognoo.substring(0, ognoo.indexOf(","));

// ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

// let day = ognoo.substring(0, ognoo.length);

// if (month >= 1 && month <= 12) {
//   month = month.length == 1 ? "0" + month : month;
// } else {
//   month = "iim sar bhku";
// }
// if (day >= 1 && day <= 31) {
//   day = day.length == 1 ? "0" + day : day;
// } else {
//   day = "iim udur bhku";
// }
// alert(year + "-" + month + "-" + day);
// 32;



/*2. Garaas utasny dugaar ( 99001234 ) avan shalgah, zөv dugaar bol hargalzakh operators (Unitel, Mobicom, G-Mobile, Skytel) hevleh , buruu dugaar bol buruu gesen messezhiyg өgökh*/
// let num = prompt("phone number");
// if (num.length == 8) {
//   let phone = num.substring(0, 2);
//   if (phone == 88 ||  phone == 89 || phone == 86) {
//     alert("Tanii dugaar unitel-iin dugaar baina.");
//   } else if (phone == 99 || phone == 95 || phone == 85) {
//     alert("Tanii dugaar mobi-iin dugaar baina.");
//   } else if (phone == 90 || phone == 91 || phone == 87) {
//     alert("Tanii dugaar Skytel-iin dugaar baina.");
//   } else if (phone == 60) {
//     alert("Tanii dugaar Ondo-iin dugaar baina.");
//   } else if (phone == 98 || phone == 83) {
//     alert("Tanii dugaar G - Mobile-iin dugaar baina.");
//   } else alert("uuchlaarai tanii utga buruu baina");
// } else {
//   alert("Utasnii dugaar 8 orontoi baina!");
// }

/*Mongol ulsyn irgeniy burtgeliyn dugaar boloh registeriyn dugaar n 10 orontoy ehniy 2 oron n үseg үldsen ni too baidag bilee. 
Tagwel heree heureglach Garaas 10 Temdegt Orulahad Ehleed tuhain oruulsan utga 10 Baigaa eseh daraa ni 2 oron ni useg mun eseh. Khervee ene buh nuhtsuluud biylej  baival ta mongol ulsyn registeriyn dugaaryg zөv oruullaa gej kharuulna uu. Khervee ali neg nökhtsöl n buruu baival ta mongol ulsyn irgeniy burtgeliyn dugaaryg buruu oruullaa gezh kharuulna uu. */
// let reg = prompt("registeriin dugaaraa oruulna uu?");
// if (reg.length == 10){
//   let useg = reg.substring(0, 2);
//   if(useg == "ru" || useg == "ur")
//   alert("ta mongol ulsiin irgen mun baina")
// }else{
// alert("ta sharavaagiin irgenii burtgeliyn dugaaryg buruu oruullaa")}

/*Khervee khereglegch garaas utasny dugaar oruulval өgөgdson utgyg too mun esvel bish esekhiyg shalgaarai.
Daraa n tuhain ogogdson utasny ehny 4 oron n +976 baigaa esekhiyg shalgana. Etsest n өgөgdson utasny dugaaryn urt 12 baival ta mongol ulsyn utasny dugaaryg zuv oruullaa gezh kharuulaaray. Khervee buruu baiwal ta mongol ulsyn utasny dugaaryg buruu oruullaa gezh kharuulna.
Zhishee ni
Input: +97699119911 */
// let utas = prompt("utasnii dugaaraa oruulna uuu");
// if(utas.length == 12){
//   let too = utas.substring(0, 4);
//   if(too == +976)
//   alert("ta mongol ulsyn utasny dugaaryg zuv oruullaa")
//   else{
//     alert("tanii oruulsan  utas mongol ulsiin dugaar bish bna shuu")
//   }
  
// }
// else{
//   alert("tanii oruulsan  utas mongol ulsiin dugaar bish bna")
// }

/*3 orontoi too (  n  ) orohod tuhain 3 orontoi tooni tsipruudiin niilberig ol. */

let n = prompt("gurvan orontoi too oruulna uuu");
let one = n.substring(0, 1);
let two = n.substring(0, 2);
let thre = n.substring(0, 3);
if(thre==123){
  alert(thre+two+one)
}
