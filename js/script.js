// INPUT
const inputName = document.querySelector('.inputName');

const inputKm = document.querySelector('.inputKm');

const inputAge = document.querySelector('#inputAge');

const costoKm = 0.21;

const scontoMinori = 20;

const scontoOver65 = 40;

const output = document.querySelector('.output');


let nameValue,  kmValue, ageValue, scontoBiglietto, bigliettoScontato;
let finalPrice;
let tipoBiglietto = 'Biglietto Standard'
// BUTTONS
const btngenera = document.querySelector('.btngenera');
const btnannulla = document.querySelector('.btnannulla');

btngenera.addEventListener('click',function(){
 nameValue = inputName.value;

 kmValue = parseInt(inputKm.value);

 ageValue = inputAge.value;

 console.log(nameValue, kmValue, ageValue);

 const price = kmValue * costoKm;

 console.log(price);

 finalPrice = price;

 if(ageValue === 'minorenne'){
  finalPrice *= 1 - (scontoMinori / 100);
  tipoBiglietto = 'Biglietto Young';
  } else if (ageValue === 'over65'){
    finalPrice *= 1 - (scontoOver65 / 100);
    tipoBiglietto = 'Biglietto Silver';

  }
  console.log(finalPrice, tipoBiglietto);

  // genero gli elemnti random
  const numCarrozza = Math.ceil(Math.random() * 12);
  const codiceCP = Math.floor(Math.random() * (100000 - 90000)) + 90000;

  document.getElementById ( 'nome-passeggero'). innerHTML = nameValue ;
  document.getElementById( 'offerta-applicata'). innerHTML = tipoBiglietto;
  document.getElementById( 'costo') .innerHTML = finalPrice;
  document.getElementById( 'carrozza').innerHTML = numCarrozza;
  document.getElementById('codice-cp').innerHTML = codiceCP;
})
