fetch("http://localhost:3333/api/users")
.then((res)=> res.json())
.then((data)=>{ users(data)
})




function users(data){
  data.map((user)=>{

    let newDiv = document.getElementById("card");
   
    newDiv.innerHTML += `<div>
 
    <div> ${user.surName} </div>
    <div> ${user.name} </div>
    <div> ${user.balance} </div>
    <div> ${user.balance_type}</div>

    </div>`;
  })
}

let btn = document.getElementById("btn");

let input = document.getElementById("input");

btn.addEventListener("click", ()=>{
  fetch("http://localhost:3333/api/users")
  .then((res)=> res.json())
  .then((data)=>{ users(data)
    data.innerHTML =""
console.log(input.value)

  for (i=0;i<input.value;i++){
    
    data.map ((user)=>{
      if(user.balance_type){
      let huu = input.value*(user.balance*0.1)+user.balance;
      
       console.log(huu)
      }else {
        let huu2 =input.value * (user.balance*0.01)+user.balance 
        console.log(huu2)
      }
      })
  }
  })
})

