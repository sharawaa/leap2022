
// document.getElementById("name").innerText= "sainuu ";
// document.getElementsByTagName("h2")[0].innerText = "hi";


let a = 100;

  

 const myInterval = setInterval(function(){
    let r = 102;
let g = 24;
let b =160;
    document.getElementsByClassName("class")[0].innerHTML = "<h1>hello world<h1>";
    document.querySelector(".class").style.color = "red";``
    document.getElementsByClassName("class")[0].style.backgroundColor =`rgb(${r}, ${g}, ${b})`;
    document.getElementsByClassName("class")[0].style.height ="100px";
    document.getElementsByClassName("class")[0].style.width ="300px";
        
        a++;
        
        if(a==600){
            document.getElementsByClassName("class")[0].style.backgroundColor="red"

            
        }else if(a==800){
            document.getElementsByClassName("class")[0].style.backgroundColor="blue"
            clearInterval(myInterval)
        }

        
       
        // console.log(a);
    
    }, 10);



      