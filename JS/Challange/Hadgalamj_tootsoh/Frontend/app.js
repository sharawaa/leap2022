fetch("http://localhost:3333/api/users")
.then((res)=> res.json())
.then((data)=>{ users(data)
})




function users(data){
  data.map((user)=>{

    let newDiv = document.getElementById("card");
    newDiv.innerHTML += `
    <div> ${user.surName} </div>
    <div> ${user.name} </div>
    <div> ${user.balance} </div>
    `;
  })
}

let btn = document.getElementById("btn");

let input = document.getElementById("input");

btn.addEventListener("click", ()=>{
  fetch("http://localhost:3333/api/users")
  .then((res)=> res.json())
  .then((data)=>{ users(data)
console.log(input.value)
  for (i=0;i<1;i++){
    data.map((user)=>{
      if(user.balance_type){
      let huu =input.value*((user.balance*10)/100)+user.balance;
      
      console.log(huu)
      }else {
        let huu2 =input.value * ((user.balance*1)/100)+user.balance 
        console.log(huu2)
      }
      })
  }
  })
})

