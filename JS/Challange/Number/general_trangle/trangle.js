/*Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол */

// let a = 7;
// let b = 4;

// console.log( Math.sqrt((a*a)+(b*b))+" gurvaljnii naluugiin urt")

let calculateInterest = function (total,year,rate) {
    let interest = rate/100+1;
     return parseFloat((total*Math.pow(interest,year)).toFixed(4))
}

calculateInterest(915,13,2);