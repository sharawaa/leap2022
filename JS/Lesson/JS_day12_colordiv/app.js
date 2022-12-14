/*16 shirheg ungu ungiin div uusgetsgeey */


let rootElement = document.getElementsByClassName("color")[0];
let num = 100;

rootElement.style.width="410px";
rootElement.style.display="flex"
rootElement.style.flexWrap= "wrap";


let myButton = document.getElementById("myBtn");
myButton.style.width="100px";
myButton.style.height="50px";
myButton.style.backgroundColor="green";
let r = (Math.floor(Math.random()* 255));
    let g = (Math.floor(Math.random()* 255));
    let b = (Math.floor(Math.random()* 255));
    let f = (Math.floor(Math.random()* 15));

    for(let i =0; i<16; i++){
    

        let newDiv = document.createElement("div");
        rootElement.appendChild(newDiv);
        newDiv.style.height="100px";
        newDiv.style.width="100px";
        newDiv.style.border="1px solid white";
        newDiv.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
        
        if(f==i){
            newDiv.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
        }
        console.log(f)
    };






function changeBackgroundColor () {
    rootElement.innerHTML = ""
    let r = (Math.floor(Math.random()* 255));
    let g = (Math.floor(Math.random()* 255));
    let b = (Math.floor(Math.random()* 255));
    let f = (Math.floor(Math.random()* 15));

for(let i =0; i<16; i++){
    

    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.height="100px";
    newDiv.style.width="100px";
    newDiv.style.border="1px solid white";
    newDiv.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
    
    if(f==i){
        newDiv.style.backgroundColor=`rgb(${r-num}, ${g}, ${b})`;
        num--;
    }
    console.log(f)
};
    }
myButton.addEventListener("click",changeBackgroundColor);


// myButton.addEventListener("click",()=>{myButton.style.backgroundColor="green"});