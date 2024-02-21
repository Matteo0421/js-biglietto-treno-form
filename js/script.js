// INPUT
const inputName = document.querySelector('.inputName');

const inputKm = document.querySelector('.inputKm');

const inputAge = document.querySelector('.inputAge');

const costoKm = 0.21;

const scontoMinori = 0.20;

const scontoOver65 = 0.40;


let nameValue,  kmValue, ageValue, scontoBiglietto, bigliettoScontato;
let messageDiscount, message;
let finalPrice;
// BUTTONS
const btngenera = document.querySelector('.btngenera');

btngenera.addEventListener('click',function(){
 nameValue = inputName.value;

 kmValue = inputKm.value;

 ageValue = inputAge.value;

 console.log(nameValue, kmValue, ageValue);

 const price = kmValue * costoKm;

 console.log(price);

 finalPrice = price;
})

