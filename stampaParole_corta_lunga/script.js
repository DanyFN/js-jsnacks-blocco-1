// ES 1
//
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


var parolaUno = prompt("inserisci la prima parola 1");

// creo un controllo per non far inserire stirnghe vuote o numeri
while ((isNaN(parseInt(parolaUno))===false) || parolaUno.length == 0) {
  parolaUno = prompt("ERRORE!! Inserisci di nuovo parola 1");
};

var parolaDue = prompt("inserisci la parola 2");

// creo un secondo controllo per non far inserire stirnghe vuote o numeri

while ((isNaN(parseInt(parolaDue))===false) || parolaDue.length == 0) {
  parolaDue = prompt("ERRORE!! Inserisci di nuovo parola 2");
};

var paroleId = document.getElementById("ordineParole");

if (parolaUno.length > parolaDue.length) {
  paroleId.innerHTML = (parolaDue + " - " + parolaUno);
}else if (parolaUno.length < parolaDue.length) {
  paroleId.innerHTML = (parolaUno + " - " + parolaDue);
}else {
  paroleId.innerHTML = ("Le parole sono della stessa lunghezza");
}
