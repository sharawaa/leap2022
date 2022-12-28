

fetch("http://localhost:3333/api/users")
.then((res)=> res.json())
.then((data)=> users(data))
function users(data){
  data.map((user)=>{
    console.log(user)
  })
}
