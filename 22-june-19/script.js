// function checkBal(){
//     let accountBal = document.querySelector("input").value;
//     if(accountBal >= 1000000){
//         alert("Congratulations you're a millionaire");
//     }

//     else{
//         alert("Sorry your not a millionaire");
//     }
// }

// let maths;
// let english;
// let computer;

// function admitted(){
//     let maths = document.querySelector("#maths").value;
//     let english = document.querySelector("#english").value;;
//     let computer = document.querySelector("#computer").value;;
//     let isEligible = maths >= 10 || english >= 8 || computer >=20 ;
    
//     if (isEligible == true){
//         alert("Congratulations your'e eligible");
//     }

//     else{
//         alert("Sorry your'e not eligible");
//     }
    
// }

const apple = 10;
const mango = 15;
const banana = 8;
const aliHas = 100;

let noOfApples = 2;
let noOfMangoes = 3;
let noOfBananas = 4;

if (noOfApples*apple + noOfMangoes*mango + noOfBananas*banana <= aliHas){
    alert("shopping Sucessful");
}

else{
    alert("shopping failed");
}