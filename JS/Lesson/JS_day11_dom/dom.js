document.getElementById("root").innerHTML = "<h1>hello world<h1>";
document.getElementsByClassName("dummy")[0].innerHTML = "<p>sainuu</p> ";


// /*id gaar element songoh */
// document.querySelector("dummy").innerText ="hi";


//dark mode
document.getElementsByClassName("darkMode")[0].innerHTML = "<h1>dark mode</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"

document.getElementsByTagName("img")[0].src = "https://picsum.photos/200";
document.getElementsByTagName("h1")[0].style.color = "red";
//hugatsaaa unguruh tusam urgun urtsana 
let a = 100;
setInterval(function(){
document.getElementsByTagName("p")[1].style.backgroundColor = "blue";
document.getElementsByTagName("p")[1].style.width= `${a}px`;
    a++;
    console.log(a);
    return a =500
}, 1000);

//tsag hiih

// let m = 1;
// setInterval(function(){
//     document.getElementsByClassName("transition")[0].innerHTML = m;
//     m++;
//     console.log("minut; "+m);
    
// }, 60000);



// let s = 0;
// setInterval(function(){
//     document.getElementsByClassName("transition1")[0].innerHTML ="second: " +s;
//     s++;
//     console.log("second"+s);
    
// }, 100);

let sec = 0;
let min = 0;
let hour = 0;
setInterval(function() {
    sec++;
    if(sec==60){
        min++;
        sec=0;
    }else if(min == 60){
        hour++;
        min=0;
    }else if(hour==24){
        hour=0;
    }
    document.getElementsByClassName("transition")[0].innerHTML = `${hour < 10 ? "0":"" }${hour}:${min < 10 ? "0":"" }${min}:${sec < 10 ? "0":"" }${sec}`
}, -100000);






const newDiv = document.createElement("h1");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);

//li element uusgeed dotor ni for davtaltaar too oruultsgaay
let grootElement = document.getElementById("groot");
let ulElement = document.createElement("ul");
grootElement.appendChild(ulElement);

for(let i=0; i<10; i++){
    let liElement = document.createElement("li");
    liElement.innerText = i.toString();
    ulElement.appendChild(liElement);
};



