// let object ={
//     // key: value,
//     firstname: "naranbayr",
//     lastname: "bat",
//     age: "22",
//     score: [77, 90, 85, 100],
//     isMarried: false,  
//     //method
//     shout: ()=>{ 
//         console.log("oohooho");
//         return "waahahah"
//     }
// }
// console.log(object.age);

// console.log(object.shout())
//aro function
// let func  =>  (){
// console.log(object);    
// }

// function getperson (){

//     console.log("person")
// }


// let person1 = {
//     firstname: "Наранбаяр",
//     }
    // let person2 = person1;
    // person2.firstName = "Эрдэнэ";
    // console.log(person1.firstName);
    // console.log(person2.firstName);


//     person2 = [...person1];
// person2.firstName = "Эрдэнэ";
// console.log(person1.firstName);
// console.log(person2.firstName);



// let person3  = [1, 2, 3,];
// let person4 = [...person3];   //let person4 = [...person3];=== let person4 = [...[1, 2, 3,]];

// person4[3] =1000;
// console.table(Object.values(person4));

/*tamirchin toirgoor guideg 10s 20s 30s hugtsaatai guideg array zohiono */

let athletics =[
    {
        name:"gonchig",
        age: 22, 
        record:[45, 47, 50, 57]
    },
    {
        name:"vanchig", 
        age:20, 
        record:[46, 48, 53, 55]},
    {
        name:"sumlai",
        age:24,
        record:[40, 45, 47, 50]
    },
    {
        name:"dorj",
        age:23,
        record:[41, 44, 46, 51]
    }
]


function getavaregespeed(abc){
    //buh tamirchdiiin dundaj hurd
    
}




function getavaregeage(number){
//dundaj nas 

let sum=0;
for(let i=0; i<number.length; i++){
 sum = sum + number[i].age}
 
return Math.round(sum/number.length);

}
console.log("dundaj hurd: " + getavaregeage(athletics))






// function getAvgAge(list) {
//     let sum = 0;
//     for (i = 0; i < list.length; i++) {
//       sum += list[i].age;
//     }
//     return Math.round(sum / list.length);
//   }
