/*1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз. */
let lastName ="Urtnasan";
let firstName = "Sharavnaymbuu";
console.log();
/* 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.*/
console.log(lastName.toLowerCase());
console.log(firstName.toLowerCase())
/*3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү. */
console.log(lastName.toUpperCase());
console.log(firstName.toUpperCase());
/*4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()” */
let Pinecone ="Pinecone academyd тавтай морилнуу";
let leap = "leap хөтөлбөрт тавтай морилго уу";
console.log(Pinecone.concat(leap));

/*5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  */
    let age = "22";
    let country = "huvsgul";
    let job = "developer";
    console.log(firstName.concat("miniii ner"));


/*6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
          1 2 3 4 5 
          2 3 4 5 1 
          3 4 5 1 2 
          4 5 1 2 3 
          5 1 2 3 4 */
          
    console.log("1 2 3 4 5\n2 3 4 5 1\n3 4 5 1 2\n4 5 1 2 3");
          /*3 оронтой той ( n ) ороход тухайн 3 оронтой тооны нийлбэрийг ол. */

          /*1. 2 тоо prompt - оор авна
2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу. */
let a = 4 ;
let b = 7;
console.log(Math.floor(Math.random() * Math.abs(a-b))+Math.min(a, b));

/*1 удаагийн хэвлэлтээр үүнийг хэвлэж гаргана уу.

Hello I am "Name Here".
I am 'Age here' years old.
    This is the new line with tab and some \backslashes\ */
    let p = "Hello I am Name Here";
    let o ="I am Age here years old."
    console.log("Hello I am Name Here\nI am Age here years old.\n\tThis is the new line with tab and some backslashes\.");
/*Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол */

