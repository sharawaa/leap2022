/*Array дотор гараас орсон үг хэдэн ширхэг орсныг тоолдог алгоритм бичнэ үү. */
let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

console.log(data.indexOf("нүүрс"));

let output ="";
for(i=0; i<data.length;i++){
    
output+= data.includes("нүүрс")
}
console.log(output)