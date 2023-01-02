// fetch("http://localhost:3333/api/users")
// .then((res)=> res.json())
// .then((data)=>{ users(data)
// })




// function users(data){
//   data.map((user)=>{

//     let newDiv = document.getElementById("card");
   
    
//   })
// }

let button = document.querySelector("button");
let input = document.querySelector("input");



button.addEventListener("click", () => {
  // users.innerHTML =""
  fetch("http://localhost:3333/api/users")
  .then((res)=> res.json())
  .then((data)=>{ 
    data.map ((user)=>{
      let dollor = user.balance;
        for (i=0; i<input.value; i++){
          if(user.balance_type){
           dollor = dollor * 0.1 + dollor;
            console.log(dollor)
          }else {
            dollor = dollor * 0.01 + dollor 
            console.log(dollor)
        }
    }
    user.innerHTML += `<div class = "user">
    <div class = "sureaName">sureName: ${user.surName} </div>
    <div class = "name">name:> ${user.name} </div>
    <div class = "balance">balance:> ${user.balance} </div>
   
    </div>`;
      })
})
})

