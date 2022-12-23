//Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let long = itCompanies.length;

//Array - аас эхний 3 компанийг хайчилж ав =>shift
console.log(itCompanies.slice(3))

//Array - аас сүүлийн 3 компанийг хайчилж ав
console.log(itCompanies.slice((long)-3));

//Мэдээллийн технологийн дунд компанийг arrey - аас хайчилж ав end aldaa garsaaan

console.log(itCompanies.slice(Math.floor(long/2)),(Math.round(long/2)));


//Эхний мэдээллийн технологийн компанийг array - аас хас
let firstCompany = itCompanies.shift();
console.log(firstCompany)
console.log(itCompanies)
//Сүүлийн мэдээллийн технологийн компанийг array - аас хас pop ashiglana


console.log(itCompanies.pop())
console.log(itCompanies)

// let studentNames = ['boldo', 'dorjo', 'tsetsge']
// let i = 0;
// while (i < studentNames.length) {
// if (studentNames[i][0] === 'd') {
// console.log(studentNames[i]);
// }
// i++;
// }

// let studentNames1 = ['boldo', 'dorjo', 'tsetsge']
// let j = 0;
// while (j < studentNames.length) {
// if (studentNames[j][0] === 'd') {
// console.log(studentNames1[j]);
// }
// j++;
// }
// let studentAges = [10, 20, 15, 19, 18,19 ,19];

// let sum = 0;
// while (i < studentAges.length) {
// sum+=studentAges[i]
// i++;
// }
// let avarage = sum/studentAges.length
// console.log(Math.floor(avarage));

// let userBalance = [1000, 2000, 2500, 4000000,]
//     let a = 0;
//     while (a < userBalance.length) {
//     userBalance[a] *= 1.15;
//     a++;
//     }
//     console.log(userBalance);