/* Garaas ognoo, sar, ödör gesen utguudyg avan daraah formatyn daguu haruulna uu. Zhishee 2009, 12, 31 gezh orzh irvel “2009-12-31”. Ankhaarakh zuyl khervee өdөr, sar neg orontoy baival 2 orontoi bolgokh buyu sar n 1 gezh baival “01” bolgokh, garaas oruulzh baigaa utgyg shalgakh*/

let ognoo = prompt("он, сар, өдөр");


let year = ognoo.substring(0, ognoo.indexOf(","));

ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

let month = ognoo.substring(0, ognoo.indexOf(","));

ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

let day = ognoo.substring(0, ognoo.length);

if (month >= 1 && month <= 12) {
  month = month.length == 1 ? "0" + month : month;
} else {
  month = "iim sar bhku";
}
if (day >= 1 && day <= 31) {
  day = day.length == 1 ? "0" + day : day;
} else {
  day = "iim udur bhku";
}
alert(year + "-" + month + "-" + day);
32;
