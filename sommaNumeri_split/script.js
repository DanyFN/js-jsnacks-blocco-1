// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt("inserisci un numero di 4 cifre");
console.log(typeof numero);

while (isNaN(numero)) {
  numero = prompt("ERRORE! NON HAI INSERITO UN NUMERO");
}

while ( !(numero >= 1000 && numero <= 9999) ) {
  numero = prompt("ERRORE!! Inserisci un numero di 4 cifre");
};

var numeroSplit = numero.split("");
console.log(numeroSplit);


var somma = 0;

for (var i = 0; i < numeroSplit.length; i++) {
  somma = somma + parseInt(numeroSplit[i]);
}

var numeriSomma = document.getElementById("listaP");
numeriSomma.innerHTML = "La somma totale è: " + somma;



console.log(somma);
