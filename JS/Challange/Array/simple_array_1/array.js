/*Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 
*/
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let long = itCompanies.length
//console.log() ашиглан array хэвлэх
console.log(itCompanies);
//Array дахь компаниудын length хэвлэх
console.log(long)

//Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
console.log("ehnii company :"+itCompanies[0]+"\nsuuliin company :"+itCompanies[long-1]);
console.log(itCompanies[Math.round(long/2)])

//Компани бүрийг хэвлэх

let output = "";
for(let i=0;i<long;i++){
    output = output + " " + itCompanies[i]+ " "
}
output = output+ ""
console.log(output);

//Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
let output1 = "";
for(let i=0; i < long;i++){
    output1+= " "+itCompanies[i].toUpperCase()+ "\n";
}

console.log(output1)


console.log(itCompanies[0].toUpperCase())

//Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.
let output2 = ""
for(let i=0;i<long;i++){
    output2+= " ," + itCompanies[i]
}
output2+= ", zereg medeelliin tehnologiin tomoohon companiud ym"
console.log(output2)
