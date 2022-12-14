let myButton = document.getElementById("myBtn");
function changeBackgroundColor () {
myButton.style.backgroundColor = "green"
}
myButton.addEventListener("click",changeBackgroundColor);

let youButton = document.getElementById("myButton");
function changeBackgroundColor () {
myButton.style = "background-color: green"
}
myButton.addEventListener("click",changeBackgroundColor);