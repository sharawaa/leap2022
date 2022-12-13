/*n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана. */
let n = 487;
let prime = true;


for(i=2 ; i<n; i++){
    if (n % i == 0 ){
        prime = false;
        break;
    }
}

if(prime ==true){
    console.log("Yes");
}
else{
    console.log("No");
}