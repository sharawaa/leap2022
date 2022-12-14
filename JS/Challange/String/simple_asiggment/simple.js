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
    let job = "hugjuulegch";
    console.log("miniii ner " + firstName + " bi " + country + " aimagt amidardag. " + lastName + " bol minii aav " + " bi " +job + " eer ajildag " );

    /*6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
          1 2 3 4 5 
          2 3 4 5 1 
          3 4 5 1 2 
          4 5 1 2 3 
          5 1 2 3 4 */
          
          console.log("1 2 3 4 5\n2 3 4 5 1\n3 4 5 1 2\n4 5 1 2 3");