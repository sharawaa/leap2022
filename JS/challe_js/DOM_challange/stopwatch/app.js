/*1. минут : секунд : дойл гэж харагддаг дижитал цаг хийнэ үү. */
let doil =0;
let sec =0;
let min = 0;

setInterval(function() {
    doil++;
    if(doil==100){
        sec++;
        doil=0;
    }else if(sec == 60){
        min++;
        sec=0;
    }else if(min==60){
        min=0;
    }
    document.getElementsByClassName("transition")[0].innerHTML = `${min < 10 ? "0":"" }${min}:${sec < 10 ? "0":"" }${sec}:${doil < 10 ? "0":"" }${doil}`
}, 10);

document.getElementsByTagName("div")[0].style.background="black";
document.getElementsByTagName("div")[0].style.height="100px";
document.getElementsByTagName("div")[0].style.color="aqua";
document.getElementsByTagName("div")[0].style.width="200px";
document.getElementsByTagName("div")[0].style.borderRadius="20px";
document.getElementsByTagName("div")[0].style.textAlign="center";
document.getElementsByTagName("div")[0].style.fontSize="50px";
document.getElementsByTagName("div")[0].style.padding="30px";