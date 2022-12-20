/*1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.       */

let i = 4 > 3; //true
console.log(i)
let iii = 4 < 3; //false
console.log(iii)
let ii = 4 >= 3; //false->true
console.log(ii)
let iv = 4 <= 3;//false
console.log(iv)
let v = 4 == 4;//true
console.log(v)
let vi = 4 === 4;//true
console.log(vi)
let vii = 4 != 4;//true->false
console.log(vii)
let iix = 4 !== 4;//true->false
console.log(iix)
let ix = 4 != "4";//false
console.log(ix)
let x = 4 == "4";//true
console.log(x)
let xi = 4 === "4";//false
console.log(xi)


/*2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу. */

let one = 4 > 3 && 10 < 12;//true
console.log("ehniih"+one)
let two = 4 > 3 && 10 > 12;//false
console.log(two)
let three = 4 > 3 || 10 < 12;//true
console.log(three)
let four = 4 > 3 || 10 > 12;//true
console.log(four)
let five = !(4 > 3);//false
console.log(five)
let six = !(4 < 3);//true
console.log(six)
let eight = !(4 > 3 && 10 < 12);//false
console.log(eight)
let nine = !(4 > 3 && 10 > 12);//true
console.log(nine)
let ten = !(4 === "4");//true
console.log(ten)

/*3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу. */

let yourAge =42;

let myAge = 22;

if(myAge >= yourAge){
    console.log("nadaas duu ym bnoo chi")
}
else{
    console.log("shaal hugshin ym bnashdee ta"
    )
}
/*4. Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.  */



let day = 1;


if (day === 1){
console.log("davaa garag")
}
else if(day === 2){
    console.log("myagmar garag")
}
else if(day === 3){
    console.log("lhagva garag")
}
else if(day === 4){
    console.log("purev garag")
}
else if(day === 5){
    console.log("baasa garag")
}
else if(day === 6){
    console.log("byamba garag")
}
else if(day === 7){
    console.log("nyam garag")
}
else if(day === 7){
    console.log("nyam garag")
}

else{
    console.log("buruu too ")
}


/*Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй. Тухайн хүний цалинг тооцно уу
 */

let hours = 40
let ratePerHour = 28


console.log((hours-ratePerHour)*5000+ " tugrugnii tsalin avahnee ta")