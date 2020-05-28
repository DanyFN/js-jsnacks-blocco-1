// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ["freddie","brian","roger","john"];

var utente = prompt("Inserisci il tuo nome","scrivi qui...");

var trovato = false;

//FOR

// for (var i = 0; i < invitati.length; i++) {
//   if (invitati[i] == utente) {
//     trovato = true;
//   }
// };

//WHILE
var i = 0;
while (i < invitati.length) {

  if (invitati[i] == utente) {
    trovato = true;
  }
  i++;
}


if (trovato) {
  document.writeln("Sei invitato")
}else{
  document.writel("Non sei invitato")
};

// cn il while inserire nella condizione trovato === false
