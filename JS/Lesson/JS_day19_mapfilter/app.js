
 let foods = [{
            name: "baked beans",
            price: 0.40,
            image: "beans.jpg",
            type: "vegetables"
            },
            {
            name: "hot dogs",
            price: 1.99,
            image: "hotdogs.jpg",
            type: "meat"
            },
            {
            name: "spam",
            price: 2.85,
            image : "spam.jpg",
            type : "meat"
            },
            {
            name: "refried beans",
            price: 0.99,
            image : "refried.jpg",
            type : "vegetables"
            },
            {
            name: "kidney beans",
            price: 0.58,
            image : "kidney.jpg",
            type : "vegetables"
            },
            {
            name: "garden peas",
            price: 0.52,
            image : "gardenpeas.jpg",
            type : "vegetables"
            },
            {
            name: "mushy peas",
            price: 0.58,
            image : "mushypeas.jpg",
            type : "vegetables"
            },
            {
            name: "corned beef",
            price: 2.39,
            image : "cornedbeef.jpg",
            type : "meat"
            },
            {
            name: "tomato soup",
            price: 1.40,
            image : "tomatosoup.jpg",
            type : "soup"
            },
            {
            name: "chopped tomatoes",
            price: 0.45,
            image : "tomato.jpg",
            type : "vegetables"
            },
            {
            name: "chicken noodle soup",
            price: 1.89,
            image : "chickennoodle.jpg",
            type : "soup"
            },
            {
            name: "carrot and coriander soup",
            price: 1.49,
            image : "carrotcoriander.jpg",
            type : "soup"
            }
        ]

//filteriig turshitsgaay
let cheap = foods.filter((food)=>{
    console.log ("hello doming something");
    return food.price < 1;
    }); //arrow function retuns boolean



    let cheap1 = foods.filter( (food) => food.price < 1); //arrow function retuns boolean
    



//sortiig turshitsgaay
let numbers = [1, 23, 124, 1, 25, 125, 1, 5, 1, 51, 5];
numbers.sort((a, b) => a -b); //returns number (positive || negative)
console. log (numbers);



// mapiig turshitsgaay 
  let newFoods = foods.map((food) => [food.name, food.price]);
console.log (newFoods);
// let orchuulga = [
// { ner:"baked beans",une: 0.4}
// {ner: "hot dog", une: 0.99 }]


let prices = foods.map((food) => food.price); // arrow function retuns anything




let names = ["boldo", "dorjo", "altai", "gerlee", "bataa", "batmunkh"];
