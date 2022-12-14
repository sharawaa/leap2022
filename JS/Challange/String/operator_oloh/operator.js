/*2. Garaas utasny dugaar ( 99001234 ) avan shalgah, zөv dugaar bol hargalzakh operators (Unitel, Mobicom, G-Mobile, Skytel) hevleh , buruu dugaar bol buruu gesen messezhiyg өgökh*/
let num = prompt("phone number");
if (num.length == 8) {
  let phone = num.substring(0, 2);
  if (phone == 88 ||  phone == 89 || phone == 86) {
    alert("Tanii dugaar unitel-iin dugaar baina.");
  } else if (phone == 99 || phone == 95 || phone == 85) {
    alert("Tanii dugaar mobi-iin dugaar baina.");
  } else if (phone == 90 || phone == 91 || phone == 87) {
    alert("Tanii dugaar Skytel-iin dugaar baina.");
  } else if (phone == 60) {
    alert("Tanii dugaar Ondo-iin dugaar baina.");
  } else if (phone == 98 || phone == 83) {
    alert("Tanii dugaar G - Mobile-iin dugaar baina.");
  } else alert("uuchlaarai tanii utga buruu baina");
} else {
  alert("Utasnii dugaar 8 orontoi baina!");
}