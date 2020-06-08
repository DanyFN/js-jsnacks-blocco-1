// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
var numero = prompt("inserisci un numero di 4 cifre");
console.log(typeof numero);


while ( !(numero >= 1000 && numero <= 9999) || isNaN(numero) ) {
  if (isNaN(numero)) {
    numero = prompt("ERRORE! hai inserito dei caratteri")
  }else if ( !(numero >= 1000 && numero <= 9999) ) {
    numero = prompt("ERRORE! inserisci un numero di 4 cifre")
  }
};

var numeroSplit = numero.split("");
//oppure ciclare sulla stringa con il .length
console.log(numeroSplit);


var somma = 0;

for (var i = 0; i < numeroSplit.length; i++) {
  somma = somma + parseInt(numeroSplit[i]);
  // somma += parseInt(numeroSplit[i]);
}

var numeriSomma = document.getElementById("listaP");
numeriSomma.innerHTML = "La somma totale è: " + somma;



console.log(somma);
