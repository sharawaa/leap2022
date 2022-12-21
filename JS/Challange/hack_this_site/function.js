/*hacmk hiih code bichih */
//ehniii hack 

//2 too oruulna ter toon hoorondoh tegsh toog hevlene

//TEXT dundaas tom usgiig ni ylgaj avah ter ni pass code bnaa

let text = document.querySelector(".text").innerText;
let bigwords = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let output=""
 for(i=0;i<text.length;i++){
    for(j=0;j<bigwords.length;j++){
        if(text[i]==bigwords[j]){
            output= output+text[i]+"";
        }}}
 console.log(output);