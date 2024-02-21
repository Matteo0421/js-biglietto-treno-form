// INPUT
const input1 = document.querySelector('.input1');

const input2 = document.querySelector('.input2');

const input3 = document.querySelector('.input3');

let valoreNome;

// BUTTONS
const btngenera = document.querySelector('.btngenera');


btngenera.addEventListener('click',function(){
 valoreNome = input1.value;
 console.log(valoreNome);
})
