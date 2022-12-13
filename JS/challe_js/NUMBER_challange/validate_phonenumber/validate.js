/*Khervee khereglegch garaas utasny dugaar oruulval өgөgdson utgyg too mun esvel bish esekhiyg shalgaarai.
Daraa n tuhain ogogdson utasny ehny 4 oron n +976 baigaa esekhiyg shalgana. Etsest n өgөgdson utasny dugaaryn urt 12 baival ta mongol ulsyn utasny dugaaryg zuv oruullaa gezh kharuulaaray. Khervee buruu baiwal ta mongol ulsyn utasny dugaaryg buruu oruullaa gezh kharuulna.
Zhishee ni
Input: +97699119911 */
let utas = prompt("utasnii dugaaraa oruulna uuu");
if(utas.length == 12){
  let too = utas.substring(0, 4);
  if(too == +976)
  alert("ta mongol ulsyn utasny dugaaryg zuv oruullaa")
  else{
    alert("tanii oruulsan  utas mongol ulsiin dugaar bish bna shuu")
  }
  
}
else{
  alert("tanii oruulsan  utas mongol ulsiin dugaar bish bna")
}
