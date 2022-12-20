// let BoldIncome = 5_000_000;
// let hairiinHuch2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if(BoldIncome>1_000_000){
//             resolve("succes");
//         }else{
//             reject("error")
//         }
//     }, 2000);
// })
// // console.log(hairiinHuch2);


// hairiinHuch2
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((error) => {
//     console.log(error);
//   })

//   .finally(() => {
//     console.log("finished");
//   });







let arr = [
  { name: "Andy", age: 30 },
  { name: "yunchir", age: 20 },
];

let newArr = [...arr];{
newArr[1].name = "yunchir1";

console.log(arr[1].name);
console.log(newArr[1].name);
}
console.log(newArr);



function reSizeImage(image, callback) {
    let err = "";
    if (image.size != "1800x2090") {
    err = "зөв хэмжээтэй файл биш байна.";
    }
    let resizedImage = image;
    //resize image үйлдлийг энд хийсэн гэж үзээд шинэ файлаа
    callback(resizedImage, err);
    }
    //save image to DB - энд орж ирэх файл нь DB руу хадгалах ф
    function saveImage(image, callback) {
    let savedImage = image; // Хадгалсан гэж үзье
    let err = "";
    console.log(image)
}


// let newObjImage = {
//     type: "png",
//     size: "1800x2090",
//     file: { fileName: "img.png", path: "./desktop/img2.png"
//     }
    
//     getImage(newObjImage, (rightTypeImage, err) => {
//     if (err.length > 0) return err;
//     reSizeImage(rightTypeImage, (resizedImage, err) => {
//     if (err.length > 0) return err;
//     saveImage(resizedImage, (savedImage, err) => {
//     if (err.length > 0) return err;
//     alert("Success");
//     });
//     });