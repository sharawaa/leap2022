// const select =document.querySelector(`#breeds`);
// const card = document.querySelector(`#card`);
// let current= "";

// fetch("https://dog.ceo/api/breeds/list")
//     .then((res)=>res.json())
//     .then((data) => generator(data.message)
//         // fetchImage(data.message[0]);
//         // current= data.message[0];
//     );


// function generator(data){
//     data.map((dogBreed) => {
//         const html =`<option value="${dogBreed}">${dogBreed}</option>`;
//         select.innerHTML+=html;
//     });
// }



// //

// function generatorImage(url){
//     const image = `<img scr="${url}">`
//     card.innerHTML = image
// }



// function fetchImage(breedType){
//     fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
//     .then((res)=>res.json())
//     .then((data) => generatorImage(data.message));
// }

// select.addEventListener("change", () => {
//     fetchImage(select.value);
// });
// select.addEventListener("click", () => {
//     fetchImage(select.value)
// });


const select = document.querySelector("#breeds");
const card = document.querySelector(".card");
let current = "";

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    generateBreeds(data.message);
    // console.log(data);
    fetchImage(data.message[0]);
    current = data.message[0];
  });

function generateBreeds(data) {
  data.map((dogBreed) => {
    const html = <option value="${dogBreed}">${dogBreed}</option>;
    select.innerHTML += html;
  });
}

function generateImage(url) {
    const image = `<img src="${url}">`;
    card.innerHTML = image;
  }
  

  function fetchImage(breedType) {
    fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
      .then((res) => res.json())
      .then((data) => generateImage(data.message))
      
  }

