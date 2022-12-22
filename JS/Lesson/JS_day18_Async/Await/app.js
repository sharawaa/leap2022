// async function fryegg (){
//     return 10
// }
// let result = fryegg()
// console.log(result);

// let abc;

// result.then((result)=>{
//     abc=result;
//     console.log("dotor" + abc)
// })
// console.log("gadna" + abc)

//example

function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));//coffee
    return coffee_promise}

async function call2(){
    let break_promise = await Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("finished break");
        }, 3000);
        });
        return break_promise
    }

   async function call3(){
    let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("finished frying egg");
    }, 5000);
    });

    // let combined_promise = Promise.all([coffee_promise, egg_promise, break_promise]);
    return egg_promise
    }


    async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
    }
    
    morning();


    // async function fryEgg() {
    //     let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("done!"), 1000)
    //     });
    //     let result = await promise; // энд 1 сэкүнд хүлээнэ
    //     console.log(result);
    //     }
    //     console.log("a");
    //     console.log("b");
    //     fryEgg();
    //     console.log("final");