// INPUT
const inputName = document.querySelector('.inputName');

const inputKm = document.querySelector('.inputKm');

const inputAge = document.querySelector('.inputAge');

const costoKm = 0.21;

const scontoMinori = 20;

const scontoOver65 = 40;

const output = document.querySelector('.output');


let nameValue,  kmValue, ageValue, scontoBiglietto, bigliettoScontato;
let messageDiscount = '', message;
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

 if(ageValue < 18){
  finalPrice *= 1 - (scontoMinori / 100);

  messageDiscount =`  Avete diritto ad una promozione perche siete clienti under18, quindi sara applicato uno sconto del 20% sul prezzo del biglietto intero. Quindi il nuovo costo è di ${finalPrice.toFixed(2)} €
  `
  } else if (ageValue >= 65){
    finalPrice == 1 - (scontoOver65 / 100);
    messageDiscount = `  Avete diritto ad una promozione perche siete clienti over65, quindi sara applicato uno sconto del 40% sul prezzo del biglietto intero. Quindi il nuovo costo è di ${finalPrice.toFixed(2)} €
    `
  }
  message = `Con ${kmValue} km il prezzo del biglietto è di € ${price.toFixed(2)}`;
  message += messageDiscount;
  console.log(message);
  output.classList.toggle
  output.innerHTML =message;
})

