/*16 shirheg ungu ungiin div uusgetsgeey */
let rootElement = document.getElementsByClassName("color")[0];
rootElement.style.width="410px";





// rootElement.style.backgroundColor="aqua";
// console.log(f)
rootElement.style.display="flex"
rootElement.style.flexWrap= "wrap";

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

    // let test = document.getElementsByTagName("div");
    
    // const test2 = (test[f]);
    // test2.style.backgroundColor="red"
    
    if(f==i){
        newDiv.style.backgroundColor=`rgb(${r-100}, ${g-90}, ${b+30})`;
    }
    console.log(f)
};