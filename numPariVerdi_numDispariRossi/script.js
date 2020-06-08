// Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

var arrayNumeri = [23, 45, 67, 89, 63, 22, 44, 66, 88, 10];
var textRed = document.getElementById('red');
var textGreen = document.getElementById('green');

for (var i = 0; i < arrayNumeri.length; i++) {
  if (arrayNumeri[i] % 2 === 0) {
    textGreen.innerHTML += '' + arrayNumeri[i] + ' ';
  } else {
    textRed.innerHTML += '' + arrayNumeri[i] + ' ';
  }
}
